# Branch Naming Convention

**IMPORTANT:** Use full prefixes, not abbreviated ones. CI enforces these exact prefixes:

- `feature/` (new features) - NOT `feat/`
- `fix/` (bug fixes)
- `bugfix/` (bug fixes - alternative)
- `hotfix/` (critical production fixes)
- `docs/` (documentation only)
- `refactor/` (code refactoring)
- `test/` (test additions)
- `chore/` (maintenance tasks)

Example: `feature/add-user-dashboard`

## Branch Workflow

**Current Strategy: Direct to Master (Active Development Phase)**

This project uses a simplified workflow during active development for faster iteration:

```text
feature/* → master → production (Coolify auto-deploy)
```

**Why this approach:**

- Faster iteration during active development
- Small team with tight coordination
- Every merge is deployment-ready
- Manual testing responsibility on developers

**Development Flow:**

1. **Create feature branch from master**

   ```bash
   git checkout master && git pull origin master
   git checkout -b feature/your-feature-name
   ```

2. **Develop and test locally**
   - Run tests: `npm test`
   - Run E2E locally: `NEXTAUTH_URL=http://localhost:3001 npx playwright test`
   - Ensure all checks pass

3. **Push and create PR targeting master**

   ```bash
   git push -u origin feature/your-feature-name
   gh pr create --base master
   ```

4. **CI runs:**
   - ✅ Lint: ESLint + Prettier
   - ✅ Test: Vitest unit tests
   - ✅ Typecheck: TypeScript
   - ✅ Build: Next.js production build
   - ✅ E2E: Playwright (100% stable)

5. **Manual review and testing**
   - Code review by maintainer
   - Manual testing of critical paths
   - Verify no breaking changes

6. **Merge triggers automatic deployment**
   - GitHub webhook to Coolify
   - Docker build (~2 min)
   - Rolling update with healthcheck
   - Production live (~3 min total)

## E2E Test Status

- ✅ **Re-enabled in CI** (Dec 15, 2025) after achieving 100% stability
- Runs on every PR via `.github/workflows/ci.yml`
- 3 critical path tests covering quest interactions and focus mode
- ~16 second runtime with 2 workers in parallel
- Uses robust modal dismissal to prevent flakiness

**Key E2E Testing Insight:**
The biggest source of E2E flakiness was the welcome modal not being dismissed properly, blocking ReactFlow from rendering. Always ensure modals are fully dismissed (wait for `hidden` state) before proceeding with tests.

## Hotfixes

- Same workflow (all changes go through PRs)
- Use `hotfix/` prefix for critical fixes
- Can expedite review but still require CI checks
