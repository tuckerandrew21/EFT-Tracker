# Model Selection (Cost Optimization)

**Goal:** Reduce Claude API costs by 35% while maintaining code quality.

## Quick Decision Framework

Before starting any task:

```
□ Is it security/auth/database schema? → SONNET
□ Is it >500 LOC or >3 files? → SONNET
□ Is error message clear OR scope well-defined? → HAIKU
□ Otherwise → Default to HAIKU, escalate if needed
```

## Use Haiku (Target: 75-80% of tasks)

- Bug fixes with clear error messages
- Unit test writing
- Integration test writing
- File operations (search, read, edit)
- Documentation updates
- Simple features (<300 LOC)
- Git operations
- Code review (<500 lines)
- Single-file refactoring

## Use Sonnet (Target: 20-25% of tasks)

- Security-critical code (auth, rate limiting, validation)
- Database schema changes
- Complex features (>500 LOC)
- Architectural decisions
- E2E test debugging
- Performance optimization
- Ambiguous problem analysis

## Quality Gates

Before shipping any Haiku work:

- ✅ All tests pass (unit, integration)
- ✅ Lint/format checks clean
- ✅ Type checking passes
- ✅ No console errors in dev

**Detailed guidelines:** See `.claude/HAIKU_GUIDE.md`

**Tracking log:** See `.claude/HAIKU_LOG.md`
