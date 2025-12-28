---
paths: scripts/test-coolify-build.sh
---

# Deployment Testing Rules

When modifying this script:

- Test all 3 tiers (quick, full, Docker)
- Ensure Windows compatibility (EPERM handling)
- Update error messages to be actionable
- Maintain script performance (Tier 1 <30s, Tier 2 <3min, Tier 3 <4min)
