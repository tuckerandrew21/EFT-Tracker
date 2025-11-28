# Code Deployment Verification Workflow

## Overview

This workflow ensures code changes are properly compiled, deployed, and verified before declaring success to the user. It prevents the common issue of telling users "it's ready" when changes haven't actually reached the browser.

## Problem Statement

**What went wrong:**

- Made code change to QuestTree.tsx (`panOnDrag={[1, 2]}`)
- File was saved correctly
- Dev server was running
- BUT: Next.js Turbopack cached the old version
- Hot Module Reload (HMR) didn't trigger
- Told user to refresh, but browser still served cached code
- User couldn't see changes

**Root cause:** Assumed HMR would work without verification.

## Mandatory Verification Steps

### Step 1: Make Code Changes

- Edit files as needed
- Save all changes

### Step 2: Force Compilation

After making changes, ALWAYS do ONE of:

**Option A: Touch the file to trigger HMR**

```bash
touch /path/to/changed/file.tsx
sleep 3  # Wait for recompilation
```

**Option B: Clear cache and restart (most reliable)**

```bash
rm -rf .next
npm run dev  # Run in background
sleep 8  # Wait for full startup
```

**Option C: For critical changes, kill all dev servers first**

```bash
# Kill any existing servers
pkill -f "next dev" || true
rm -rf .next
npm run dev
sleep 8
```

### Step 3: Verify Compilation

Check dev server output for:

- ✅ `✓ Compiled` or `GET /path 200 in Xms`
- ❌ No errors in compilation
- ❌ No TypeScript errors
- ❌ No build warnings

```bash
# Check latest dev server output
BashOutput with latest bash_id
# Look for compilation timestamp AFTER your edit
```

### Step 4: Verify Browser Can Access Changes

**Before telling user to test:**

Option A: Use curl to verify HTML contains new code

```bash
curl -s http://localhost:3000/quests | grep -o "panOnDrag" | head -1
# Should show evidence of new code if it's in rendered output
```

Option B: Check compiled JavaScript (for client components)

```bash
# Check .next directory for compiled code timestamp
ls -lt .next/server/app/quests/*.js | head -5
# Should show recent modification time
```

Option C: Open browser dev tools and check Network tab

- Hard refresh should show 200 responses with recent timestamps
- No 304 (cached) responses for critical files

### Step 5: Run E2E Tests

**MANDATORY: Always run E2E tests before declaring success**

```bash
npm run test:e2e
```

**Why E2E tests are required:**

- Unit tests with fireEvent/React Testing Library don't simulate real browser behavior
- React Flow intercepts events in ways that synthetic events don't replicate
- E2E tests catch integration issues that unit tests miss
- Real browser environment reveals CSS, z-index, pointer-events issues

**If E2E tests fail:**

- DO NOT tell user "it's ready"
- Fix the actual browser behavior first
- Unit tests passing is NOT sufficient

### Step 6: Inform User

Only AFTER all verifications pass AND E2E tests pass:

```
✅ Changes deployed and verified!
📍 Dev server: http://localhost:3000
🔄 Hard refresh required: Ctrl+Shift+R (Win/Linux) or Cmd+Shift+R (Mac)

What to test:
- [Specific interaction to test]
- [Expected behavior]
```

## Common Next.js Caching Issues

### Issue 1: Turbopack HMR Not Triggering

**Symptoms:** File saved, no recompilation in logs
**Fix:** `touch` the file or restart dev server

### Issue 2: Browser Aggressive Caching

**Symptoms:** Dev server shows new compilation, browser shows old code
**Fix:** User must hard refresh (Ctrl+Shift+R)

### Issue 3: Service Worker Caching

**Symptoms:** Hard refresh doesn't work
**Fix:** Open DevTools → Application → Service Workers → Unregister

### Issue 4: Multiple Dev Servers Running

**Symptoms:** Changes work intermittently
**Fix:** `pkill -f "next dev"` then start single instance

### Issue 5: Stale .next Cache

**Symptoms:** Recompiles but serves old version
**Fix:** `rm -rf .next` before restart

## Testing Automation (Future Enhancement)

### Playwright E2E Test for Wiki Links

Create `/workspaces/EFT-Tracker/__tests__/e2e/wiki-links.spec.ts`:

```typescript
import { test, expect } from "@playwright/test";

test("wiki links are clickable", async ({ page, context }) => {
  await page.goto("http://localhost:3000/quests");

  // Wait for quest nodes to load
  await page.waitForSelector('[data-testid="quest-node"]', { timeout: 10000 });

  // Find first wiki link icon
  const wikiLink = page.locator('a[aria-label*="wiki"]').first();
  await expect(wikiLink).toBeVisible();

  // Click should not pan canvas (verify left-click works)
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    wikiLink.click(),
  ]);

  // Verify wiki opened in new tab
  expect(newPage.url()).toContain("escapefromtarkov.fandom.com");
  await newPage.close();

  // Verify middle-mouse can still pan
  // (Would require more complex mouse event simulation)
});
```

Run before declaring success:

```bash
npm run test:e2e -- wiki-links.spec.ts
```

### Quick Smoke Test Script

Create `scripts/verify-deployment.sh`:

```bash
#!/bin/bash
set -e

echo "🔍 Verifying deployment..."

# 1. Check dev server is running
if ! curl -s http://localhost:3000 > /dev/null; then
  echo "❌ Dev server not responding"
  exit 1
fi

# 2. Check for compilation errors in logs
if grep -q "Error:" /tmp/dev-server.log; then
  echo "❌ Compilation errors detected"
  exit 1
fi

# 3. Check page loads successfully
STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/quests)
if [ "$STATUS" != "200" ]; then
  echo "❌ Page returned $STATUS"
  exit 1
fi

echo "✅ Deployment verified!"
```

## Checklist Template

Use this for every code change before telling user "it's ready":

```markdown
Deployment Verification Checklist:

- [ ] Code changes saved to disk
- [ ] Dev server restarted OR file touched to trigger HMR
- [ ] Waited sufficient time for compilation (3-8 seconds)
- [ ] Checked BashOutput for successful compilation
- [ ] No TypeScript errors in output
- [ ] No build warnings
- [ ] Verified timestamp of compilation is AFTER edit
- [ ] (Optional) Ran relevant E2E test
- [ ] (Optional) Used curl to verify change in output
- [ ] Informed user with clear testing instructions
- [ ] Specified need for hard refresh
```

## Examples

### Good Flow

```
1. Edit QuestTree.tsx (change panOnDrag)
2. rm -rf .next && npm run dev (background)
3. sleep 8
4. Check BashOutput → sees "✓ Compiled /quests"
5. curl http://localhost:3000/quests | grep panOnDrag
6. Inform user: "Changes deployed! Hard refresh (Ctrl+Shift+R) to test"
```

### Bad Flow (What I Did)

```
1. Edit QuestTree.tsx
2. Assume HMR will work
3. Tell user to refresh
4. User sees old code (cached)
5. User reports: "hasn't updated"
6. Scramble to debug
```

## Integration with PR Workflow

Before pushing to PR branch:

1. Run full test suite: `npm run test`
2. Run E2E tests: `npm run test:e2e`
3. Run build: `npm run build`
4. Verify build succeeded: check exit code

Only push if all pass.

## Lessons Learned

1. **Never trust HMR blindly** - Always verify compilation occurred
2. **Check timestamps** - Compilation time must be AFTER edit time
3. **Cache is evil** - When in doubt, nuke `.next` and restart
4. **Verify before declaring success** - Don't tell user "it works" until verified
5. **Hard refresh is required** - Browser cache persists even with new server code
6. **Multiple dev servers cause chaos** - Kill old ones before starting new
7. **E2E tests catch integration issues** - Unit tests passed, but feature didn't work in browser

## Quick Reference Commands

```bash
# Nuclear option - guaranteed fresh start
pkill -f "next dev"; rm -rf .next; npm run dev

# Gentle restart - preserve some cache
touch src/components/path/to/file.tsx

# Check if dev server is healthy
curl -I http://localhost:3000

# Monitor dev server logs
tail -f /path/to/dev-server.log  # if redirected to file

# Check for TypeScript errors
npx tsc --noEmit
```

## When User Says "It's Not Working"

Checklist:

1. Check BashOutput for latest compilation timestamp
2. Compare timestamp to your last edit time
3. If timestamp is OLD → restart dev server
4. If timestamp is NEW → ask user to hard refresh
5. If still not working → check browser DevTools Console for errors
6. If still not working → check browser DevTools Network tab for cached responses (304)
7. If still not working → ask user to disable service workers
8. If still not working → there's an actual bug in your code

## Prevention is Better Than Cure

**Make this workflow automatic:**

- Create git pre-push hook that runs tests
- Create npm script that combines build + verify
- Add E2E test for critical features
- Document deployment verification in CONTRIBUTING.md
- Add deployment checklist to PR template
