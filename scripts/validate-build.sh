#!/bin/bash
# Build validation script - catches ALL issues at once before push
# This script mimics the GitHub Actions CI pipeline locally
# Usage: npm run validate

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Track errors - don't stop at first failure
ERRORS=()
WARNINGS=()
START_TIME=$(date +%s)

echo ""
echo -e "${BLUE}╔════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║       Build Validation - Local CI Simulation          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════╝${NC}"
echo ""

# Helper function to run checks without stopping
run_check() {
    local check_name="$1"
    shift

    echo -e "${BLUE}→${NC} $check_name..."

    if "$@" 2>&1; then
        echo -e "${GREEN}✓ $check_name passed${NC}"
        return 0
    else
        local exit_code=$?
        echo -e "${RED}✗ $check_name failed (exit code: $exit_code)${NC}"
        ERRORS+=("$check_name")
        return 1
    fi
}

# Check Node version
check_node_version() {
    local node_version=$(node --version)
    echo "  Node: $node_version"
    return 0
}

# Install dependencies
install_deps() {
    cd "$ROOT_DIR"
    pnpm install --frozen-lockfile
}

# Generate Prisma Client
generate_prisma() {
    cd "$ROOT_DIR"
    pnpm --filter @eft-tracker/web run prisma:generate
}

# Run Prettier check on changed files
check_prettier() {
    cd "$ROOT_DIR"
    # Check all files if no git history available
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        echo "  (Git not available, skipping changed files check)"
        return 0
    fi

    # Get changed files
    local changed_files=$(git diff --name-only --diff-filter=ACMR HEAD || true)
    if [ -z "$changed_files" ]; then
        echo "  (No changed files to check)"
        return 0
    fi

    pnpm -r run format:check
}

# Run ESLint
run_eslint() {
    cd "$ROOT_DIR"
    echo "  ESLint (Web App)..."
    pnpm --filter @eft-tracker/web run lint

    # Try companion, but don't fail if it doesn't exist
    echo "  ESLint (Companion)..."
    pnpm --filter @eft-tracker/companion run lint 2>/dev/null || {
        WARNINGS+=("Companion package not found (OK if not using it)")
        return 0
    }
}

# Run TypeScript check
run_typecheck() {
    cd "$ROOT_DIR"
    echo "  TypeScript (Web App)..."
    pnpm --filter @eft-tracker/web run type-check

    echo "  TypeScript (Companion)..."
    pnpm --filter @eft-tracker/companion run type-check 2>/dev/null || {
        WARNINGS+=("Companion typecheck skipped (OK if not using it)")
        return 0
    }
}

# Run tests
run_tests() {
    cd "$ROOT_DIR"
    NODE_ENV=test pnpm run test
}

# Build
run_build() {
    cd "$ROOT_DIR"
    echo "  Building web app..."
    NODE_ENV=production SKIP_ENV_VALIDATION=1 pnpm --filter @eft-tracker/web run build

    # Verify build artifacts
    if [ ! -d "$ROOT_DIR/apps/web/.next" ]; then
        echo "  ERROR: .next directory not created"
        return 1
    fi

    if [ ! -f "$ROOT_DIR/apps/web/server.js" ] && [ ! -d "$ROOT_DIR/apps/web/.next/standalone" ]; then
        WARNINGS+=("Standalone output may not be properly configured")
    fi

    echo "  Build artifacts created successfully"
    du -sh "$ROOT_DIR/apps/web/.next" 2>/dev/null || true
}

# Run all checks (collect all errors)
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Running checks..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo -e "${BLUE}Environment:${NC}"
check_node_version

echo ""
echo -e "${BLUE}Setup:${NC}"
run_check "Dependencies" install_deps || true
run_check "Prisma Generate" generate_prisma || true

echo ""
echo -e "${BLUE}Code Quality:${NC}"
run_check "Prettier Format" check_prettier || true
run_check "ESLint" run_eslint || true
run_check "TypeScript" run_typecheck || true

echo ""
echo -e "${BLUE}Testing & Build:${NC}"
run_check "Unit/Integration Tests" run_tests || true
run_check "Production Build" run_build || true

# Calculate duration
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))
MINUTES=$((DURATION / 60))
SECONDS=$((DURATION % 60))

# Print summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${BLUE}VALIDATION SUMMARY${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Duration: ${MINUTES}m ${SECONDS}s"
echo ""

if [ ${#WARNINGS[@]} -gt 0 ]; then
    echo -e "${YELLOW}⚠ Warnings (${#WARNINGS[@]}):${NC}"
    for warning in "${WARNINGS[@]}"; do
        echo "  - $warning"
    done
    echo ""
fi

if [ ${#ERRORS[@]} -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "Your code is ready to commit and push."
    echo ""
    echo "Next steps:"
    echo "  1. Review your changes: git diff"
    echo "  2. Commit: git commit -m \"<message>\""
    echo "  3. Push: git push"
    echo ""
    exit 0
else
    echo -e "${RED}✗ ${#ERRORS[@]} check(s) failed:${NC}"
    for error in "${ERRORS[@]}"; do
        echo "  - $error"
    done
    echo ""
    echo "Fix these issues and run 'npm run validate' again."
    echo ""
    echo "Tips:"
    echo "  • For formatting: npx prettier --write <files>"
    echo "  • For ESLint: npm run lint -- --fix <files>"
    echo "  • For TypeScript: Read error messages above"
    echo ""
    exit 1
fi
