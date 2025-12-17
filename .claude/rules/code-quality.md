# Code Quality Guidelines

## TODO/FIXME Policy

- Before committing, scan for TODO/FIXME comments
- For each TODO: Create a GitHub issue and reference it (e.g., `TODO #123: description`)
- FIXMEs must be resolved before merging - they indicate broken code
- Use `it.skip()` for tests that need fixing, with a linked issue

## PR Best Practices

- Keep PRs under 500 lines when possible
- Split large features into logical chunks:
  - Backend/API changes first
  - Frontend components second
  - Tests can be separate or included
- One PR = one logical change
- Always fill out the PR template sections
- **Issue linking:** Put each issue on its own line for auto-close to work:
  ```
  Closes #101
  Closes #102
  ```
  NOT: `Closes #101, #102` (comma-separated won't auto-close)
