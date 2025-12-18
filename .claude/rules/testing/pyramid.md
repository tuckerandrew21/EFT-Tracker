# Testing Philosophy

## Test Pyramid

This project follows a proper test pyramid with distinct boundaries:

```
        /\
       /E2\     E2E (2%) - Critical user journeys only
      /----\
     / INT  \   Integration (49%) - Components with mocked APIs
    /--------\
   /   UNIT   \ Unit (49%) - Pure functions, calculations
  /------------\
```

**Current Test Distribution:** 49% Unit : 49% Integration : 2% E2E (✅ Healthy!)

## When to Use Each Test Type

### Unit Tests (`__tests__/unit/`)

**Use for:** Pure functions, calculations, utilities, business logic

**Examples:**

- Transform parsing (`parseZoomFromTransform`)
- Node positioning calculations (`calculateNodeHeight`)
- Touch target size validation
- Utility functions (rate limiting, string formatting)

**Characteristics:**

- Fast (<100ms per test)
- No external dependencies
- No browser, no API calls, no database
- Test edge cases exhaustively

**Run with:** `npm test -- __tests__/unit/`

### Integration Tests (`__tests__/integration/`)

**Use for:** React components, API routes with mocked dependencies, multi-component interactions

**Examples:**

- `QuestTree` component with mocked ReactFlow
- `QuestFilters` with mocked API calls
- API routes with MSW handlers
- Contract verification tests

**Characteristics:**

- Medium speed (<500ms per test)
- Mock external dependencies (APIs, databases)
- Test component behavior, not implementation
- Use MSW for API mocking
- Use React Testing Library for component tests

**Run with:** `npm test -- __tests__/integration/`

### E2E Tests (`__tests__/e2e/`)

**Use for:** ONLY critical user journeys that MUST work for app to be usable

**Examples:**

- ✅ Login → complete quest → verify progress saved
- ✅ Double-click quest → enter focus mode → ESC exits
- ❌ Filter by trader (use integration test instead)
- ❌ Verify quest count (use unit/integration test)

**Critical Rules:**

- Maximum 3-5 E2E tests total
- Each test must represent a complete user journey
- Keep tests under 150 lines each
- Use helper functions for common operations
- **ALWAYS dismiss modals properly** - wait for `hidden` state

**Run with:** `npx playwright test`

### Smoke Tests (`__tests__/smoke/`)

**Use for:** Post-deployment validation in production

**Examples:**

- Critical API endpoints return 200
- Homepage loads without errors
- Authentication flow accessible
- No console errors on page load

**Characteristics:**

- Very fast (<2 min total)
- Run against production URL
- Triggered by deployment webhook
- Creates GitHub issue on failure

**Run with:** `npx playwright test --config=__tests__/smoke/smoke.config.ts`

## API Contract Testing

Use TypeScript + Zod for compile-time and runtime type safety:

1. Define schemas in `src/types/api-contracts.ts`
2. Import schemas in both API routes and MSW handlers
3. Create contract verification tests in `__tests__/integration/api/contracts/`
4. TypeScript catches type mismatches at compile time
5. Zod validates request/response shapes at runtime

**No need for heavy contract testing tools** (Pact, Dredd) - TypeScript type-sharing is sufficient for monolithic apps.

## Pre-Commit Checklist

Before creating a commit or PR:

1. Run `npm test` - all tests pass
2. Run `npm run lint` - no lint errors
3. Scan for new TODO/FIXME comments - create issues if needed
4. Check PR size - consider splitting if >500 lines
5. Write meaningful commit message with context
6. Include test coverage for new functionality
7. **New features:** Add appropriate test coverage at the right level (prefer unit/integration over E2E)
