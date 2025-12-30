---
name: "Phase 1: Core Intelligence Improvements"
about: Enhance Next Up with map synergy, chain momentum, and trader progress
title: "Phase 1: Enhance Next Up with map synergy, chain momentum, and trader progress"
labels: enhancement, quest-tracking, phase-1
---

# Phase 1: Core Intelligence Improvements

Enhance Next Up with map synergy, chain momentum, trader progress tracking, and quest type diversity without requiring database changes.

## Problem

The current Next Up algorithm uses a simple 4-tier system that doesn't consider:

- **Map synergy** - Multiple quests available on the same map for raid efficiency
- **Quest chain momentum** - Nearly-completed quest chains that are ready to finish
- **Trader progression** - Which traders have high completion percentages
- **Quest type variety** - Can show 5 quests of the same type

## Solution

Add 3 new intelligent tiers to the existing algorithm:

1. **Chain Completion Momentum** - Boost quests in chains that are 60%+ complete
2. **Map Synergy** - Prioritize quests on maps with 3+ other available quests
3. **Trader Progress** - Suggest quests for traders with 70%+ completion rate
4. **Type Diversity Filter** - Limit same quest type to 2 max in suggestions

Plus UI improvement:

- Add tooltip explaining how Next Up algorithm works

## Implementation Details

**File to modify:**

- `apps/web/src/components/next-up/NextUpPanel.tsx`
  - Add 3 new calculation functions (chain progress, map synergy, trader progress)
  - Add type diversity filter
  - Add 2 new icon types ("momentum", "trader")
  - Add InfoTooltip component
  - ~250 lines added

**Reference:**
See [Next Up Enhancement Plan - Phase 1 Implementation](../../docs/next-up-enhancement-plan.md#final-implementation-plan---phase-1) for complete code snippets and algorithm pseudocode.

## Acceptance Criteria

- [ ] Chain momentum: Suggests quests in 60%+ complete chains with message "X/Y in chain - finish it!"
- [ ] Map synergy: Suggests quests on maps with 3+ other quests with message "X quests on [Map] - efficient!"
- [ ] Trader progress: Suggests quests for traders with 70%+ completion with message "X% [Trader] done"
- [ ] Type diversity: Never shows more than 2 quests of the same type
- [ ] Tooltip: Hover over info icon shows algorithm explanation
- [ ] Real-time: Suggestions update immediately when quest is completed
- [ ] No duplicates: Each quest appears at most once in suggestions
- [ ] Priority order: Higher priority quests appear first

## Testing Checklist

- [ ] Test with various player levels (5, 20, 40, 70)
- [ ] Test with different completion patterns (new player, mid-game, late-game)
- [ ] Test with quests concentrated on one map
- [ ] Test with nearly-complete quest chains (e.g., Punisher 4/5 done)
- [ ] Test with high trader completion (e.g., 80% Mechanic quests done)
- [ ] Verify tooltip displays on hover
- [ ] Verify no duplicate quests in list

## Effort Estimate

4-6 hours

## Dependencies

None - this phase has no database or dependency changes
