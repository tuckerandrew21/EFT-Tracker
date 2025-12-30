# Next Up Intelligence Enhancement - Research Plan

## Goal

Make the "Next Up" quest suggestions more intelligent using only data we currently have, without requiring external APIs or companion app.

## Phase 1: Data Inventory ✅ COMPLETE

### Quest Data Available

- ✅ Quest metadata (level, trader, kappa requirement, type)
- ✅ Dependencies (what unlocks what)
- ✅ Objectives (map, description per objective)
- ✅ User progress (completed/available/locked status, timestamps)
- ✅ **Timestamps:** `updatedAt` tracks when each quest was last modified
- ✅ **Sync source:** `syncSource` distinguishes WEB vs COMPANION completions
- ✅ **Experience rewards:** Available from tarkov.dev API but NOT stored in database

### User Behavioral Data Available

- ✅ **Player level** - Current progression stage (1-79)
- ✅ **Quest completion timestamps** - Can infer completion velocity and session patterns
- ✅ **UI preferences:** `questsPerTree`, `bypassLevelRequirement`
- ✅ **Game mode preference:** PVP vs PVE (from CompanionToken model)
- ✅ **Device usage:** `lastSeen` timestamps show engagement frequency
- ❌ **NO click/filter tracking** - No analytics on user interactions

### Trader Progression Data

- ✅ **Basic trader data:** ID, name, color
- ✅ **Quest-to-trader mapping:** Each quest links to a trader
- ✅ **Trader standing rewards:** Available from API (e.g., +0.15 reputation)
- ❌ **NO loyalty level tracking** - No cumulative reputation storage
- ❌ **NO money spent tracking** - Can't accurately predict LL unlocks
- ❌ **NO hard-coded LL thresholds** - Would need manual data entry

## Phase 2: Smart Suggestions We Can Build Without New Data

### Idea 1: Multi-Quest Map Synergy ⭐ (HIGH IMPACT, LOW EFFORT)

**What:** Suggest quests that share the same map as other available quests
**Why:** Players want to maximize raid efficiency
**Data needed:** Quest objectives with map names (✅ we have this)
**Algorithm:**

- Group available quests by map
- Calculate "synergy score" = number of other available quests on same map
- Boost priority for quests on high-synergy maps

### Idea 2: Smart Dependency Chain Analysis ⭐ (HIGH IMPACT, MEDIUM EFFORT)

**What:** Calculate the "unlock value" of each quest more intelligently
**Why:** Current logic only counts immediate unlocks, not downstream impact
**Data needed:** Quest dependencies (✅ we have this)
**Algorithm:**

- Recursive traversal: Quest A unlocks B, B unlocks C+D → A's true value = 3
- Weight by Kappa requirements in chain
- Detect bottlenecks (quests that block many paths)

### Idea 3: Trader Loyalty Progression ⭐ (MEDIUM IMPACT, LOW EFFORT)

**What:** Prioritize quests that unlock trader loyalty levels
**Why:** Trader unlocks are major progression milestones
**Data needed:** Trader data, quest-to-trader mapping (✅ we have this)
**Algorithm:**

- Query how many more quests needed for next trader level
- Boost priority for quests that contribute to trader unlocks
- Special priority for high-value traders (Mechanic, Jaeger)

### Idea 4: Quest Type Variety

**What:** Don't suggest 5 similar quests (e.g., all PvP)
**Why:** Players want variety in their quest log
**Data needed:** Quest type enum (✅ we have this)
**Algorithm:**

- After picking top suggestions, check for type diversity
- If 3+ are same type, swap one for different type with close priority

### Idea 5: "Finishing Touches"

**What:** Suggest completing nearly-done quest chains
**Why:** Psychological satisfaction + unlock rewards
**Data needed:** Quest dependencies + completion status (✅ we have this)
**Algorithm:**

- Detect chains where user has completed 60%+ of prerequisites
- Boost priority with message like "3/5 done - finish the chain!"

## Phase 3: External Data Analysis ✅ COMPLETE

### tarkov.dev GraphQL API - Available Signals

**Complexity/Difficulty Indicators:**

- ✅ **Experience (XP):** Range 800-43,000 XP, strong correlation with difficulty
- ✅ **Objective types:** kill, giveItem, findQuestItem, visit, extract, mark, etc.
- ✅ **Item requirements:** Counts, found-in-raid status
- ✅ **Required keys:** Number and map-specific requirements

**API Constraints:**

- ✅ NO rate limits or authentication required
- ✅ Fast (~200-500ms per quest)
- ✅ Open source, MIT license
- ❌ No SLA guarantees (community project)

**Current Gap:** Experience field is fetched but NOT stored in database

---

## Phase 4: Recommended Implementation Strategy

### Priority Tier System (3 Phases)

#### **Phase 1: Quick Wins** - No Schema Changes

Implement these improvements to the existing Next Up algorithm without database changes:

1. **Map Synergy Boost** ⭐⭐⭐
   - Calculate which map has most available quest objectives
   - Boost priority for quests sharing that map
   - Message: "3 other quests on Customs - efficient!"

2. **Quest Type Diversity** ⭐⭐
   - Prevent showing 5 PVP quests or 5 Kappa quests
   - Ensure mix of types in top 5 suggestions
   - Better user experience, no data needed

3. **Chain Completion Momentum** ⭐⭐⭐
   - Detect when user is 60%+ through a chain
   - Boost incomplete quests in that chain
   - Message: "3/5 complete - finish the Punisher chain!"

4. **Trader Completion Progress** ⭐⭐
   - Calculate % of quests completed per trader
   - Suggest quests for traders with high completion rates
   - Message: "80% of Mechanic quests done - keep going!"

#### **Phase 2: Add Difficulty Signal** - Minor Schema Change

Store experience rewards to enable difficulty-aware suggestions:

1. **Add `experience` field to Quest model**
   - Migration + update seed/update scripts
   - ~4KB total storage for 500 quests

2. **Difficulty-Based Suggestions**
   - Early game (Level 1-20): Prioritize low XP quests (< 5,000)
   - Mid game (Level 21-40): Mixed difficulty
   - Late game (Level 41+): Show high XP quests (> 15,000)
   - Message: "Quick win - 3,500 XP" or "Challenge - 28,000 XP"

3. **Time Estimate Inference**
   - Simple formula: XP / 1000 = rough difficulty score
   - Label quests as "Quick" (0-5 score), "Medium" (6-15), "Long" (16+)

#### **Phase 3: Behavioral Learning** - Advanced Features

Use completion timestamps to infer playstyle:

1. **Completion Velocity Tracking**
   - Calculate quests completed per week
   - Active players (10+/week) → show harder quests
   - Casual players (1-3/week) → show easier quests

2. **Map Preference Detection**
   - Track which maps user completes quests on fastest
   - Boost suggestions for preferred maps
   - Message: "You complete Customs quests 2x faster"

3. **Trader Affinity**
   - Detect if user focuses on specific traders first
   - Continue suggesting that trader's quests
   - Message: "You've been focusing on Peacekeeper"

4. **Session Type Detection**
   - If user completes 3+ quests in one day → suggest more "same map" quests
   - If user completes 1 quest every few days → suggest standalone quests

---

## Phase 5: Implementation Details

### Files to Modify

#### Phase 1 (No Schema Changes)

- `apps/web/src/components/next-up/NextUpPanel.tsx` - Core algorithm
  - Add map synergy calculation
  - Add chain completion detection
  - Add type diversity filter
  - Add trader progress calculation

#### Phase 2 (Schema Change)

- `prisma/schema.prisma` - Add `experience Int @default(0)` to Quest model
- `prisma/seed.ts` - Store experience from API
- `prisma/update-quests.ts` - Include experience in updates
- `packages/types/src/quest.ts` - Add experience to Quest interface
- `apps/web/src/components/next-up/NextUpPanel.tsx` - Use XP for difficulty scoring

#### Phase 3 (Behavioral)

- `apps/web/src/lib/playstyle-analyzer.ts` - New utility for behavioral analysis
- `apps/web/src/hooks/usePlaystyle.ts` - New hook to fetch playstyle data
- `apps/web/src/components/next-up/NextUpPanel.tsx` - Integrate playstyle signals

### Algorithm Pseudocode (Phase 1)

```typescript
function getNextUpSuggestions(
  quests: Quest[],
  userProgress: QuestProgress[],
  playerLevel: number
): Suggestion[] {
  // Filter to available quests only
  const available = quests.filter((q) => q.computedStatus === "available");

  // Calculate map synergy scores
  const mapObjectiveCount = countObjectivesPerMap(available);
  const topMap = findMapWithMostObjectives(mapObjectiveCount);

  // Calculate chain completion progress
  const chainProgress = calculateChainProgress(quests, userProgress);

  // Calculate trader completion rates
  const traderProgress = calculateTraderProgress(quests, userProgress);

  // Score each available quest
  const scored = available.map((quest) => {
    let priority = 0;
    let reason = "";

    // Tier 1: Level match (priority: 90-100)
    if (Math.abs(playerLevel - quest.levelRequired) <= 5) {
      priority = 100 - Math.abs(playerLevel - quest.levelRequired);
      reason = `Perfect for level ${playerLevel}`;
    }

    // Tier 2: Kappa required (priority: 90)
    if (quest.kappaRequired) {
      priority = Math.max(priority, 90);
      reason = "Required for Kappa";
    }

    // Tier 3: Chain momentum (priority: 85-95)
    const chain = chainProgress[quest.id];
    if (chain && chain.completionRate > 0.6) {
      priority = Math.max(priority, 85 + chain.completionRate * 10);
      reason = `${chain.completed}/${chain.total} complete - finish the chain!`;
    }

    // Tier 4: Map synergy (priority: 70-80)
    const questMaps = quest.objectives.map((o) => o.map).filter(Boolean);
    if (questMaps.includes(topMap)) {
      const synergyCount = countQuestsOnMap(available, topMap);
      priority = Math.max(priority, 70 + synergyCount);
      reason = `${synergyCount} other quests on ${topMap} - efficient!`;
    }

    // Tier 5: Trader progress (priority: 75)
    const traderRate = traderProgress[quest.traderId];
    if (traderRate > 0.7) {
      priority = Math.max(priority, 75);
      reason = `${Math.round(traderRate * 100)}% of ${quest.trader.name} quests done`;
    }

    return { quest, priority, reason };
  });

  // Sort by priority descending
  const sorted = scored.sort((a, b) => b.priority - a.priority);

  // Apply type diversity filter
  const diverse = ensureTypeDiversity(sorted, (maxPerType = 2));

  // Return top 5
  return diverse.slice(0, 5);
}
```

---

## User Decisions ✅

1. **Scope:** Phase 1 only for now (quick wins, no DB changes)
   - Phase 2 & 3 will be separate GitHub issues with detailed specs
2. **Algorithm:** Enhance existing 4-tier system
   - Current code is clean and working well
   - Adding new tiers is simpler than rewriting
   - Preserves existing behavior users may rely on
3. **UX:** Show reason + add tooltip explaining algorithm
4. **Update timing:** Real-time preferred, no rate limit concerns (client-side only)

---

## Rate Limit Analysis & Real-Time Update Strategy

**Current data flow:**

- `NextUpPanel` receives `quests` prop (all quest data with progress)
- Suggestions calculated client-side using `useMemo`
- **NO API calls in Next Up component** - all data already loaded

**Real-time update approach:**

```typescript
// When quest status changes:
1. User clicks "Complete Quest" button
2. API endpoint updates quest status in database
3. Parent component refetches quest data (useQuests hook)
4. New quest data flows to NextUpPanel
5. useMemo automatically recalculates suggestions
```

**Rate limit impact:** ZERO

- No additional API calls needed
- Next Up always uses data that's already in memory
- Real-time updates = "free" from a rate limit perspective

---

## Summary

**Ready to implement (when you're ready):**

- **Phase 1:** Map synergy, chain momentum, trader progress, type diversity (GitHub issue #XXX)
- **Phase 2:** Difficulty/XP signals (separate GitHub issue #XXX)
- **Phase 3:** Behavioral learning (separate GitHub issue #XXX)

**Key decisions:**

- ✅ Enhance existing tier system (clean, safe)
- ✅ Real-time updates are free (no rate limit concerns)
- ✅ Show reasons + tooltip (transparency)
- ✅ Detailed specs for all phases in GitHub issues

---

## GitHub Issues

See the related GitHub issues for implementation details:

- **Phase 1:** Enhance Next Up with map synergy, chain momentum, and trader progress
- **Phase 2:** Add quest difficulty awareness to Next Up using XP rewards
- **Phase 3:** Personalize Next Up suggestions based on playstyle and completion patterns

**Total estimated effort across all phases:** 16-24 hours
