# PR Auto-Merge Workflow

## Overview

When a PR is approved by the user, automatically merge it once all CI checks pass without requiring additional confirmation.

## Workflow Steps

### 1. PR Approval Detection

When the user explicitly approves a PR with statements like:

- "pr approved"
- "approved"
- "merge it"
- "looks good to merge"

Proceed to monitor the PR for CI completion.

### 2. CI Check Monitoring

- Monitor CI checks periodically (recommended: 30-second intervals)
- Use `gh pr checks <pr-number>` or GitHub API to check status
- Continue monitoring until all checks complete

### 3. Auto-Merge Conditions

Merge the PR automatically when:

- All required status checks have passed
- No checks are pending or failing
- User has already provided approval

### 4. Merge Execution

- Use squash merge method: `gh pr merge <pr-number> --squash --auto`
- Or use GitHub API: `POST /repos/{owner}/{repo}/pulls/{pull_number}/merge` with `merge_method: "squash"`
- Include commit message referencing all related issues (e.g., "Closes #77, #78, #79, #80")

### 5. Post-Merge Cleanup

- Update local master branch: `git checkout master && git pull origin master`
- Delete local feature branch: `git branch -D <branch-name>`
- Confirm completion to user

## Important Notes

### Branch Naming Convention

- Feature branches must use `feature/` prefix (not `feat/`)
- Example: `feature/quest-tracker-improvements`
- This is enforced by `.github/workflows/pr-checks.yml`

### Required CI Checks

The repository has 7 required checks:

1. Lint & Format
2. Test
3. Security Audit
4. Build
5. E2E Tests
6. Dependency Review
7. CI Success (aggregate)

All must pass before merge.

### Error Handling

If checks fail:

1. Review failure details with `gh pr checks <pr-number>`
2. Fix issues iteratively
3. Push fixes to the PR branch
4. Resume monitoring for check completion
5. Merge when all checks pass

### Manual Intervention Cases

Do NOT auto-merge if:

- User has not explicitly approved the PR
- Merge conflicts exist
- User requests to wait or review further
- Critical security vulnerabilities are detected

## Example Flow

```bash
# User approves
User: "pr approved"

# Start monitoring (every 30 seconds)
gh pr checks 82

# When all pass
gh pr merge 82 --squash --auto

# Cleanup
git checkout master
git pull origin master
git branch -D feature/quest-tracker-improvements

# Confirm
"PR #82 merged successfully!"
```

## Historical Context

This workflow was established on [previous session date] after PR #82, where the user provided feedback:

> "you're supposed to merge when it passes the checks"
> "in the future you should automatically push that pr when it passes"

The expectation is that once approval is given, the merge should happen automatically when checks pass, without requiring additional confirmation from the user.
