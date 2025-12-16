#!/bin/bash

# Coolify SSH Utility
# Provides programmatic access to Coolify deployment logs and status via SSH
# Requires: SSH credentials configured in .env.local (COOLIFY_SSH_HOST, COOLIFY_SSH_USER, COOLIFY_SSH_KEY)

set -e

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Load environment variables from .env.local
load_env() {
  if [[ ! -f .env.local ]]; then
    echo -e "${RED}Error: .env.local not found. Please create it with Coolify SSH credentials.${NC}"
    exit 1
  fi

  # Extract Coolify SSH config from .env.local
  export COOLIFY_SSH_HOST=$(grep "^COOLIFY_SSH_HOST=" .env.local | cut -d'=' -f2 | tr -d '"')
  export COOLIFY_SSH_USER=$(grep "^COOLIFY_SSH_USER=" .env.local | cut -d'=' -f2 | tr -d '"')

  # Extract multiline SSH key (handles line breaks properly)
  # This reads from COOLIFY_SSH_KEY= until the next variable assignment
  export COOLIFY_SSH_KEY=$(sed -n '/^COOLIFY_SSH_KEY=/,/^[A-Z_]*=/p' .env.local | sed '$ d' | sed 's/^COOLIFY_SSH_KEY="//' | sed 's/"$//')

  if [[ -z "$COOLIFY_SSH_HOST" || -z "$COOLIFY_SSH_USER" ]]; then
    echo -e "${RED}Error: COOLIFY_SSH_HOST or COOLIFY_SSH_USER not set in .env.local${NC}"
    exit 1
  fi

  if [[ -z "$COOLIFY_SSH_KEY" ]]; then
    echo -e "${RED}Error: COOLIFY_SSH_KEY not set in .env.local${NC}"
    exit 1
  fi

  echo -e "${GREEN}✓ Loaded Coolify SSH config${NC}"
}

# Test SSH connection
test_connection() {
  echo -e "${BLUE}Testing SSH connection to $COOLIFY_SSH_HOST...${NC}"

  # Create temporary key file
  local key_file=$(mktemp)
  trap "rm -f $key_file" EXIT

  echo "$COOLIFY_SSH_KEY" > "$key_file"
  chmod 600 "$key_file"

  if ssh -i "$key_file" -o StrictHostKeyChecking=no -o ConnectTimeout=5 -o BatchMode=yes \
      "$COOLIFY_SSH_USER@$COOLIFY_SSH_HOST" "echo 'SSH connection successful'" 2>/dev/null; then
    echo -e "${GREEN}✓ SSH connection successful${NC}"
    return 0
  else
    echo -e "${RED}✗ SSH connection failed. Has the public key been added to $COOLIFY_SSH_HOST:~/.ssh/authorized_keys?${NC}"
    return 1
  fi
}

# Get deployment logs for a specific deployment ID
get_deployment_logs() {
  local deployment_id=$1

  if [[ -z "$deployment_id" ]]; then
    echo -e "${RED}Usage: $0 logs <deployment-id>${NC}"
    exit 1
  fi

  echo -e "${BLUE}Fetching logs for deployment: $deployment_id${NC}"

  # Create temporary key file
  local key_file=$(mktemp)
  trap "rm -f $key_file" EXIT

  echo "$COOLIFY_SSH_KEY" > "$key_file"
  chmod 600 "$key_file"

  # Query Coolify API via SSH
  # Note: This assumes Coolify stores deployment logs in a specific location
  # Adjust the path based on actual Coolify installation
  ssh -i "$key_file" -o StrictHostKeyChecking=no -o BatchMode=yes \
      "$COOLIFY_SSH_USER@$COOLIFY_SSH_HOST" \
      "docker logs coolify_database_1 | grep '$deployment_id' || echo 'Deployment not found'"
}

# Get deployment status
get_deployment_status() {
  local deployment_id=$1

  if [[ -z "$deployment_id" ]]; then
    echo -e "${RED}Usage: $0 status <deployment-id>${NC}"
    exit 1
  fi

  echo -e "${BLUE}Fetching status for deployment: $deployment_id${NC}"

  # Create temporary key file
  local key_file=$(mktemp)
  trap "rm -f $key_file" EXIT

  echo "$COOLIFY_SSH_KEY" > "$key_file"
  chmod 600 "$key_file"

  # Query Coolify via Docker containers
  ssh -i "$key_file" -o StrictHostKeyChecking=no -o BatchMode=yes \
      "$COOLIFY_SSH_USER@$COOLIFY_SSH_HOST" \
      "docker ps --filter name=coolify | grep -E 'eft-tracker|EFT' || echo 'No EFT-Tracker containers found'"
}

# List recent deployments
list_deployments() {
  echo -e "${BLUE}Fetching recent deployments...${NC}"

  # Create temporary key file
  local key_file=$(mktemp)
  trap "rm -f $key_file" EXIT

  echo "$COOLIFY_SSH_KEY" > "$key_file"
  chmod 600 "$key_file"

  # Query Docker for EFT-Tracker containers
  ssh -i "$key_file" -o StrictHostKeyChecking=no -o BatchMode=yes \
      "$COOLIFY_SSH_USER@$COOLIFY_SSH_HOST" \
      "docker ps -a --filter name=eft | format 'table {{.ID}}\t{{.Image}}\t{{.Status}}'"
}

# Main command dispatcher
main() {
  local command=${1:-help}

  case "$command" in
    test)
      load_env
      test_connection
      ;;
    logs)
      load_env
      get_deployment_logs "$2"
      ;;
    status)
      load_env
      get_deployment_status "$2"
      ;;
    list)
      load_env
      list_deployments
      ;;
    help|*)
      cat << EOF
${BLUE}Coolify SSH Utility${NC}

Usage: $0 <command> [options]

Commands:
  test              Test SSH connection to Coolify server
  logs <id>         Get deployment logs for a specific deployment ID
  status <id>       Get deployment status
  list              List recent deployments
  help              Show this help message

Prerequisites:
  - Coolify SSH credentials configured in .env.local
  - Public key added to Coolify server (~/.ssh/authorized_keys)

Examples:
  $0 test
  $0 logs ogo0gkc8488sccwgocwkc8gw
  $0 status ogo0gkc8488sccwgocwkc8gw
  $0 list

EOF
      exit 0
      ;;
  esac
}

main "$@"
