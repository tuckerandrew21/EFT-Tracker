#!/bin/bash
# Wait for GitHub Actions workflow to complete
# Usage: ./scripts/wait-for-build.sh

set -e

echo "⏳ Waiting for GitHub Actions build to complete..."

# Get the latest workflow run
RUN_ID=$(gh run list --workflow=release-tauri.yml --limit 1 --json databaseId --jq '.[0].databaseId')

if [ -z "$RUN_ID" ]; then
  echo "❌ No workflow run found"
  exit 1
fi

echo "📊 Watching run #${RUN_ID}..."
gh run watch "$RUN_ID"

# Check if successful
STATUS=$(gh run view "$RUN_ID" --json conclusion --jq '.conclusion')

if [ "$STATUS" = "success" ]; then
  echo "✅ Build completed successfully!"

  # Get the tag name from the workflow
  TAG=$(gh run view "$RUN_ID" --json headBranch --jq '.headBranch')

  echo ""
  echo "Next step:"
  echo "./scripts/publish-release.sh ${TAG#tauri-v}"
else
  echo "❌ Build failed with status: ${STATUS}"
  echo "View logs: gh run view ${RUN_ID} --log"
  exit 1
fi
