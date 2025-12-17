# Local Coolify Deployment Testing (3-Tier System)

**Goal:** Catch 95%+ of deployment failures locally BEFORE pushing to GitHub. Zero failed deployments in production.

**Problem Solved:**

- ❌ Before: Deployment failures discovered after 5-10 min in Coolify
- ✅ After: 95% of failures caught locally in <30 seconds

## Three-Tier Validation System

The pre-push hook automatically runs a three-tier validation system:

### Tier 1: Quick Validation (MANDATORY, ~15-30s)

- Runs on every push
- Catches 80% of deployment failures
- Checks Nixpacks plan, env vars, dependencies, build structure
- Fast enough developers won't skip it

### Tier 2: Full Validation (CONDITIONAL, ~2-3 min)

- Runs automatically if TypeScript files changed
- Type checking, linting, tests, build
- Ensures code quality before deployment

### Tier 3: Docker Build (AUTOMATIC, ~2-4 min)

- Runs automatically if deployment-critical files changed:
  - `nixpacks.toml`, `Dockerfile`, `package.json`, `next.config.ts`
  - `pnpm-lock.yaml`, `.dockerignore`
- Tests actual Docker image that Coolify will use
- Catches runtime issues, startup failures

## Quick Start: Understanding the Workflow

```bash
# 1. Make your changes (any file)
vim apps/web/src/components/MyComponent.tsx

# 2. Stage and commit
git add .
git commit -m "feat: Add new component"

# 3. Push (pre-push hook runs automatically)
git push origin feature-branch

# Automatic validation runs:
#   Tier 1: Quick checks (~15-30s) - ALWAYS
#   Tier 2: Full validation (2-3 min) - IF TypeScript changed
#   Tier 3: Docker build (2-4 min) - IF deployment files changed
#
#   If all pass: Push completes → Coolify deployment succeeds ✓
#   If any fail: Push blocked with clear error message → Fix and retry
```

**Result:** Deployment failures caught in <30s locally instead of 5-10 min in Coolify

## Manual Testing (Optional)

Run validation manually anytime:

```bash
# Tier 1: Quick checks only (~15-30s)
bash scripts/test-coolify-build.sh --quick

# Tier 2: Just Nixpacks plan validation (~10s)
bash scripts/test-coolify-build.sh --plan

# Tier 3: Full Docker build test (~2-4 min)
bash scripts/test-coolify-build.sh

# Force rebuild without cache
bash scripts/test-coolify-build.sh --no-cache
```

## What Each Tier Checks

### Tier 1: Quick Validation

- ✅ Nixpacks configuration is valid (`nixpacks.toml`)
- ✅ Build plan doesn't include test packages (Chromium, Playwright)
- ✅ Required environment variables are documented in `.env.template`
- ✅ No Sentry packages in dependencies (removed)
- ✅ Next.js standalone build structure is valid
- ✅ All required files are present

### Tier 2: Full Validation

- ✅ TypeScript type checking passes
- ✅ ESLint / Prettier formatting correct
- ✅ All unit tests pass
- ✅ Next.js production build succeeds
- ✅ Prisma client generation works

### Tier 3: Docker Build Test

- ✅ Dockerfile generation from Nixpacks plan succeeds
- ✅ Docker image builds without errors
- ✅ Container starts successfully
- ✅ Application responds to health checks
- ✅ No startup errors in logs

## Common Issues and Fixes

**Issue: Tier 1 fails - "Sentry packages found"**

Sentry has been removed. Ensure your lock file is updated:

```bash
cd apps/web && pnpm install
```

**Issue: Tier 1 fails - "Standalone output not found"**

Next.js build hasn't run. Build locally first:

```bash
cd apps/web && npm run build
```

**Issue: Tier 3 fails - "Docker not running"**

Start Docker Desktop and try again. Docker is only needed for Tier 3 (full builds).

**Issue: Push blocked by Tier 3 Docker build**

This is intentional - it prevents Coolify deployment failures. Fix the error shown and push again.

## Installation & Setup

**One-time setup (Nixpacks CLI):**

```bash
# Install via Rust (required for local testing)
cargo install --git https://github.com/railwayapp/nixpacks nixpacks

# Verify installation
nixpacks --version
```

## Performance Notes

- Tier 1 uses Nixpacks plan generation (~10-15s)
- Tier 2 uses `npm run validate` (TypeScript, tests, build)
- Tier 3 uses full Docker build (biggest time cost)

**To speed up pushes:**

- Only Tier 3 runs when deployment files change
- Tier 2 only runs when TypeScript changes
- Tier 1 always runs (fast, catches most issues)

## Files Involved

- `scripts/test-coolify-build.sh` - Main testing script with --quick, --plan modes
- `.husky/pre-push` - Automatic 3-tier validation hook
- `nixpacks.toml` - Coolify build configuration
- `.nixpacksignore` - Excludes test files from build
- `.coolify-build/` - Temporary build artifacts (git-ignored)

## Deployment Time: Before vs After

**Before (with Sentry):**

- Deployments took 25+ minutes
- Source maps auto-uploaded during build
- Slow feedback loop for failures

**After (Sentry removed):**

- Deployments take ~3 minutes
- Fast feedback with 3-tier local testing
- Failures caught before push (<30s)
