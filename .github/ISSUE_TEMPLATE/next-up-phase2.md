---
name: "Phase 2: Difficulty-Based Suggestions"
about: Add quest difficulty awareness to Next Up using XP rewards
title: "Phase 2: Add difficulty-based quest suggestions using XP rewards"
labels: enhancement, quest-tracking, phase-2, database
---

# Phase 2: Difficulty-Based Suggestions

Add quest difficulty awareness to Next Up by storing and using XP rewards to match suggestions to player progression.

## Problem

- New players get overwhelmed by hard quests (30,000+ XP)
- Late-game players waste time on trivial quests (800 XP)
- No signal for "this is a quick win" vs "this will take hours"

## Solution

Store quest experience (XP) rewards from tarkov.dev API in the database and use them to:

- Prioritize easier quests for low-level players (Level 1-20)
- Prioritize challenging quests for high-level players (Level 41+)
- Show difficulty labels ("Quick win", "Challenge", "Epic")
- Adjust suggestion priority based on player level and quest XP

## Background Research

- Quest XP ranges from 800 (simple) to 43,000 (epic)
- Strong correlation between XP and actual difficulty/time
- Data available from tarkov.dev API (already fetched, not stored)

## Implementation

### 1. Schema Change

Add `experience` field to Quest model in `prisma/schema.prisma`:

```prisma
model Quest {
  // ... existing fields
  experience Int @default(0) // XP reward from tarkov.dev
}
```

### 2. Update Seed Scripts

- Modify `prisma/seed.ts` to store experience field from API
- Modify `prisma/update-quests.ts` to include experience in updates
- Run migration: `npx prisma db push`

### 3. Add Difficulty Scoring Logic

Add to `apps/web/src/components/next-up/NextUpPanel.tsx`:

```typescript
function getDifficultyScore(xp: number): number {
  return xp / 1000; // 0.8 to 43 scale
}

function adjustPriorityByDifficulty(
  priority: number,
  playerLevel: number,
  xp: number
): number {
  const score = getDifficultyScore(xp);
  if (playerLevel <= 20 && score < 5) return priority + 10; // Boost easy for new players
  if (playerLevel >= 41 && score > 20) return priority + 10; // Boost hard for veterans
  return priority;
}
```

### 4. Update UI

- Add difficulty badge to quest suggestions
- Include XP value in reason text
- Examples: "Quick win - 3,500 XP", "Challenge - 28,000 XP"

## Files to Modify

- `prisma/schema.prisma` - Add experience field
- `prisma/seed.ts` - Store experience from API
- `prisma/update-quests.ts` - Include experience in updates
- `packages/types/src/quest.ts` - Add experience to Quest interface
- `apps/web/src/components/next-up/NextUpPanel.tsx` - Use XP for difficulty scoring

**Reference:**
See [Next Up Enhancement Plan - Phase 2](../../docs/next-up-enhancement-plan.md) for detailed implementation guidance.

## Acceptance Criteria

- [ ] Experience field exists in Quest model with default 0
- [ ] All quests have experience value populated from seed
- [ ] Low-level players (1-20) see easier quests prioritized
- [ ] High-level players (41+) see challenging quests prioritized
- [ ] Mid-level players (21-40) see mixed difficulty
- [ ] UI shows difficulty label with XP value
- [ ] Suggestions still balanced (not all easy or all hard)

## Effort Estimate

4-6 hours

## Dependencies

- Phase 1 should be completed first (not blocking, but better UX together)
