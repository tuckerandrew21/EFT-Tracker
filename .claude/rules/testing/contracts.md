# API Contract Testing

Use TypeScript + Zod for compile-time and runtime type safety:

1. Define schemas in `src/types/api-contracts.ts`
2. Import schemas in both API routes and MSW handlers
3. Create contract verification tests in `__tests__/integration/api/contracts/`
4. TypeScript catches type mismatches at compile time
5. Zod validates request/response shapes at runtime

**No need for heavy contract testing tools** (Pact, Dredd) - TypeScript type-sharing is sufficient for monolithic apps.

## Benefits

- **Compile-time safety:** TypeScript prevents type mismatches
- **Runtime validation:** Zod catches shape violations at runtime
- **Single source of truth:** Schemas shared between API and tests
- **Easy to maintain:** Schemas live in one place
