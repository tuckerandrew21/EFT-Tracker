# Pre-Commit & Pre-Push Validation

**Validation is Now AUTOMATIC - No Manual Steps Required!**

We have two automated git hooks that catch all issues before GitHub submission:

1. **Pre-commit hook** (`.husky/pre-commit`)
   - Runs: Every time you `git commit`
   - Catches: Formatting & linting errors
   - Speed: ~10-30 seconds
   - If fails: Commit is blocked, fix and try again

2. **Pre-push hook** (`.husky/pre-push`)
   - Runs: Every time you `git push`
   - Catches: ALL issues (formatting, linting, types, tests, build)
   - Speed: ~2-3 minutes
   - If fails: Push is blocked, fix and try again

**This prevents the costly feedback loop: "push → CI fails → fix one issue → push again → different failure"**

## Standard Workflow (Completely Automatic!)

```bash
# 1. Make your changes
vim apps/web/src/components/MyComponent.tsx

# 2. Stage and commit
git add .
git commit -m "feat: Add new component"

# 3. Push to GitHub
git push origin branch-name

# 4. Automatic validation happens:
#    • Pre-commit hook: Checks formatting/linting
#    • Pre-push hook: Runs FULL validation (types, tests, build)
#    • Success: Push completes, PR can be created
#    • Failure: Shows clear errors, push blocked

# 5. If validation fails:
#    • Read error messages
#    • Fix ALL issues shown (not just first one)
#    • Try git push again
```

## What Each Hook Validates

**Pre-Commit (automatic, ~10-30s):**

```
✓ Prettier formatting
✓ ESLint linting
```

**Pre-Push (automatic, ~2-3 min):**

```
✓ Prettier formatting check
✓ ESLint (web + companion)
✓ TypeScript compilation (no errors ignored!)
✓ Prisma client generation
✓ Unit/integration tests
✓ Production build with standalone output
```

## Manual Validation (Optional)

If you want to check validation without committing/pushing:

```bash
npm run validate
```

## Understanding TypeScript Errors

**CRITICAL CHANGE:** We no longer ignore TypeScript errors (`ignoreBuildErrors: false`). This means:

- Type errors will now block your build locally AND in CI
- This is intentional - we want to catch all issues early
- If you see TypeScript errors:
  1. Read the error message fully
  2. Find all related files (e.g., type definition + all consumers)
  3. Fix them together in one commit
  4. Re-run `npm run validate`

**Common TypeScript patterns:**

- Interface change → update all consumers
- New required field → add to all places using that type
- Changed parameter type → update all call sites

## Node Version

**CRITICAL:** This project requires Node.js 22.12.0+

- Local development: Node 22.19.0 ✓ (compatible)
- CI: Node 22.12.0 ✓ (matches production)
- Production: Node 22.12.0 ✓

If you get "Node version too old" from validation, upgrade Node:

```bash
# Using nvm:
nvm install 22.12.0
nvm use 22.12.0
```

## Windows Development

### Known Limitation: Symlink Permissions

On Windows, the production build (`npm run build` with standalone output) may fail with EPERM (permission denied) errors when trying to create symlinks in `node_modules`. This is a Windows limitation, not a code issue.

**What happens:**

- Development server: Works fine (no standalone output)
- Production build on Windows: May fail with EPERM errors
- CI build on Linux: Always succeeds (Linux handles symlinks fine)
- Pre-push validation: Detects Windows and skips local build check, relies on CI validation

**Workarounds:**

1. **Recommended: Enable Developer Mode (Permanent fix)**
   - Open Windows Settings → "Privacy & Security" → "For developers"
   - Enable "Developer Mode"
   - Restart terminal/IDE
   - Try build again

2. **Alternative: Push without local validation**
   - Pre-push hook automatically handles Windows detection
   - CI will validate everything on Linux
   - Your changes are safe to push

**No action needed:** The validation script and CI are configured to handle Windows. Just push normally - GitHub CI will validate everything on Linux.

## Handling Special Scenarios

**Scenario: Prisma Schema Changed**

```bash
# 1. Modify schema.prisma
# 2. Run validation (it will detect missing Prisma generate)
# 3. Fix: Run `pnpm --filter @eft-tracker/web run prisma:generate`
# 4. Re-run `npm run validate`
```

**Scenario: TypeScript Error but Unsure How to Fix**

```bash
# The error message is your guide
# Example error:
#   Property 'foo' is missing on type 'Bar'
#
# This means:
#   1. Find where 'foo' should be added (usually in packages/types/)
#   2. Add the property
#   3. Check all files that USE type 'Bar' (validation will catch this)
#   4. Update them all
#   5. Re-validate
```

**Scenario: Still Getting CI Failure After Local Validation**

This means we found a gap in our validation. Please:

1. Note what CI caught that we didn't
2. Create a GitHub issue to track it
3. Update the validation script if needed
4. Document the fix

## Manual Checks (if validation doesn't catch something)

```bash
# Run individual checks:
npm run lint              # ESLint
npm run type-check        # TypeScript
npm run test              # Tests
npm run build             # Build

# Or the old manual way (not recommended):
npx prettier --write <files>
```

## Bypass (NOT Recommended)

```bash
git commit --no-verify  # Skips pre-commit hooks
git push --no-verify    # Skips pre-push hook
```

⚠️ **WARNING:** Bypassing validation almost always leads to CI failures. Don't do this.
