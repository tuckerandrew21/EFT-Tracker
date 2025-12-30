---
name: "Phase 3: Behavioral Learning & Personalization"
about: Personalize Next Up suggestions based on playstyle and completion patterns
title: "Phase 3: Personalize Next Up suggestions based on playstyle"
labels: enhancement, quest-tracking, phase-3, personalization
---

# Phase 3: Behavioral Learning & Personalization

Analyze quest completion timestamps and patterns to detect playstyle, then personalize suggestions accordingly.

## Problem

- All users get identical suggestions regardless of playstyle
- No detection of map preferences (some players love Customs, others avoid it)
- No detection of session patterns (quick raids vs marathon sessions)
- Casual vs hardcore players need different suggestions

## Solution

Create a playstyle analyzer that detects:

- **Completion velocity:** Casual (1-3/week) vs Active (4-10) vs Hardcore (10+)
- **Preferred maps:** Which maps user completes quests on fastest
- **Trader affinity:** Which traders user focuses on
- **Session type:** Quick raids vs marathon sessions (cluster detection)
- **Game mode:** PVP vs PVE (from CompanionToken model)

Then adjust Next Up suggestions based on detected patterns.

## Example Personalization

- User completes Customs quests 2x faster → boost Customs quests
- User completed 12 quests last week → show harder challenges
- User focuses 40% on Peacekeeper → suggest more Peacekeeper quests
- User completes quests in clusters → suggest multi-quest raid routes

## Implementation

### 1. Create Playstyle Analyzer

New file: `apps/web/src/lib/playstyle-analyzer.ts`

Analyze:

- Completion timestamps to calculate velocity (quests/week)
- Which maps have fastest avg completion time
- Which traders have highest completion rate
- If quests completed in clusters (3+ same day = marathon session)
- Game mode from most recent companion token

### 2. Create Playstyle Hook

New file: `apps/web/src/hooks/usePlaystyle.ts`

- Memoized playstyle calculation
- Uses existing quest and companion token data
- Returns: `PlaystyleProfile` interface

### 3. Integrate Into Next Up

Modify `apps/web/src/components/next-up/NextUpPanel.tsx`:

**Completion velocity adjustments:**

- Casual (1-3/week): Prioritize easier quests (XP < 10,000), solo-completable
- Active (4-10/week): Mixed difficulty, balance variety
- Hardcore (10+/week): Prioritize harder quests (XP > 15,000), chain progressions

**Map preference boost:**

- If user completes quests on certain maps 2x faster, boost those maps +15 priority
- Display reason: "You complete Customs quests 2x faster"

**Trader affinity:**

- If user focuses on specific trader (30%+ of recent completions), boost their quests +10 priority
- Display reason: "You've been focusing on Peacekeeper"

**Session type:**

- Quick sessions: Suggest standalone quests (not part of long chains)
- Marathon sessions: Suggest multiple quests on same map

### 4. Add Playstyle Indicator to UI (Optional)

Modify `apps/web/src/app/settings/page.tsx`:

- Show user's detected playstyle profile
- Let users see why suggestions are personalized
- Optional: Allow manual override of auto-detected playstyle

## Files to Create

- `apps/web/src/lib/playstyle-analyzer.ts` (~200 lines)
- `apps/web/src/hooks/usePlaystyle.ts` (~50 lines)

## Files to Modify

- `apps/web/src/components/next-up/NextUpPanel.tsx` - Integrate playstyle signals
- `apps/web/src/app/settings/page.tsx` - Show playstyle profile (optional)

## API Endpoints (Optional)

- `GET /api/user/playstyle` - Return analyzed playstyle profile
- Uses existing data, no new DB tables needed

**Reference:**
See [Next Up Enhancement Plan - Phase 3](../../docs/next-up-enhancement-plan.md) for detailed implementation guidance.

## Acceptance Criteria

- [ ] Playstyle accurately detected from completion timestamps
- [ ] Completion velocity affects difficulty suggestions
- [ ] Map preferences boost relevant quests with explanation
- [ ] Trader affinity boosts aligned quests with explanation
- [ ] Session type affects quest complexity
- [ ] Personalization messages clear ("You complete Customs 2x faster")
- [ ] Users can view detected playstyle profile
- [ ] Algorithm degrades gracefully with limited data (new users)

## Testing Scenarios

- [ ] New user (0 completed): Falls back to non-personalized
- [ ] Casual player (3/week): Sees easier, standalone quests
- [ ] Hardcore player (15/week): Sees harder, chain quests
- [ ] Customs-focused: Sees boosted Customs quests
- [ ] PVP mode (from companion): Prioritizes PVP zones

## Effort Estimate

8-12 hours

## Dependencies

- Phase 1 (core intelligence) should be complete
- Phase 2 (difficulty/XP) should be complete for better difficulty matching
