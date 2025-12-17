---
paths: __tests__/e2e/**/*.spec.ts
---

# E2E Test Rules (Critical Path Only)

**CRITICAL:** E2E tests are for critical user journeys ONLY. Keep the count minimal (max 3-5).

## Rules

- Maximum 3-5 E2E tests total
- Each test must represent a complete user journey
- Keep tests under 150 lines each
- Use helper functions for common operations
- **ALWAYS dismiss modals properly** - wait for `hidden` state

## Key E2E Testing Insight

The biggest source of E2E flakiness is the welcome modal not being dismissed properly, blocking ReactFlow from rendering. Always ensure modals are fully dismissed (wait for `hidden` state) before proceeding with tests.

## What to Test

- ✅ Login → complete quest → verify progress saved
- ✅ Double-click quest → enter focus mode → ESC exits
- ❌ Filter by trader (use integration test instead)
- ❌ Verify quest count (use unit/integration test)
