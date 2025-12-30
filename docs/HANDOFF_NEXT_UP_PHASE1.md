# Handoff: Next Up Intelligence Enhancement - Phase 1 Implementation

**Status:** Ready for implementation
**Scope:** Phase 1 only (map synergy, chain momentum, trader progress, type diversity)
**Estimated Effort:** 4-6 hours
**No Database Changes Required**

---

## Quick Context

The "Next Up" panel suggests quests to players. Currently it uses a simple 4-tier system (level match, Kappa required, chain starters, map efficiency). We're enhancing it with 3 new intelligent tiers without changing the database schema.

**Full research and planning:** `docs/next-up-enhancement-plan.md`

---

## What You're Building

Enhance `apps/web/src/components/next-up/NextUpPanel.tsx` with:

1. **Chain Completion Momentum** - Boost quests in chains that are 60%+ complete
   - Message: "X/Y in chain - finish it!"
   - Priority: 85-95

2. **Map Synergy** - Prioritize quests on maps with 3+ other available quests
   - Message: "X quests on [Map] - efficient!"
   - Priority: 75-85

3. **Trader Progress** - Suggest quests for traders with 70%+ completion rate
   - Message: "X% [Trader] done"
   - Priority: 70-75

4. **Type Diversity Filter** - Limit same quest type to max 2 in suggestions

Plus UI:

- Add 2 new icon types ("momentum" for chain, "trader" for trader progress)
- Add hover tooltip explaining how Next Up algorithm works

---

## File to Modify

**Single file:** `apps/web/src/components/next-up/NextUpPanel.tsx` (217 lines)

**What to keep as-is:**

- Tier 1: At-level quests (line 41-55)
- Tier 2: Kappa-required (line 57-68)
- Tier 3: Chain starters (line 70-95)
- Tier 4: Map efficiency (line 97-125)
- Existing `getIcon()` function and rendering logic

**What to add:** ~250 lines total

---

## Implementation Guide

### Step 1: Update Interface (1 line)

Update the `QuestSuggestion` interface to include new icon types:

```typescript
icon: "level" | "chain" | "map" | "kappa" | "momentum" | "trader";
```

---

### Step 2: Add New Calculation Functions (5 new functions)

Add these helper functions at the bottom of the file, before the export statement:

**Function 1: Calculate chain completion progress**

```typescript
function calculateChainCompletionProgress(
  allQuests: QuestWithProgress[],
  availableQuests: QuestWithProgress[]
): Map<string, { completed: number; total: number; completionRate: number }> {
  const chainProgress = new Map();

  for (const quest of availableQuests) {
    const chain = findQuestChain(quest, allQuests);
    const completed = chain.filter(
      (q) => q.computedStatus === "completed"
    ).length;
    const total = chain.length;
    const completionRate = total > 0 ? completed / total : 0;

    chainProgress.set(quest.id, { completed, total, completionRate });
  }

  return chainProgress;
}
```

**Function 2: Find all quests in a chain (recursive)**

```typescript
function findQuestChain(
  quest: QuestWithProgress,
  allQuests: QuestWithProgress[]
): QuestWithProgress[] {
  const chain = new Set<string>([quest.id]);

  const addPrerequisites = (q: QuestWithProgress) => {
    for (const dep of q.dependsOn || []) {
      if (!chain.has(dep.requiredQuest.id)) {
        chain.add(dep.requiredQuest.id);
        const prereq = allQuests.find((aq) => aq.id === dep.requiredQuest.id);
        if (prereq) addPrerequisites(prereq);
      }
    }
  };

  addPrerequisites(quest);

  return allQuests.filter((q) => chain.has(q.id));
}
```

**Function 3: Calculate map synergy**

```typescript
function calculateMapSynergy(
  availableQuests: QuestWithProgress[]
): Map<string, number> {
  const mapCounts = new Map<string, number>();

  for (const quest of availableQuests) {
    for (const obj of quest.objectives || []) {
      if (obj.map) {
        mapCounts.set(obj.map, (mapCounts.get(obj.map) || 0) + 1);
      }
    }
  }

  return mapCounts;
}
```

**Function 4: Calculate trader completion progress**

```typescript
function calculateTraderProgress(
  allQuests: QuestWithProgress[],
  availableQuests: QuestWithProgress[]
): Map<string, number> {
  const traderStats = new Map<string, { completed: number; total: number }>();

  for (const quest of allQuests) {
    const stats = traderStats.get(quest.traderId) || { completed: 0, total: 0 };
    stats.total++;
    if (quest.computedStatus === "completed") {
      stats.completed++;
    }
    traderStats.set(quest.traderId, stats);
  }

  const traderProgress = new Map<string, number>();
  for (const [traderId, stats] of traderStats.entries()) {
    traderProgress.set(traderId, stats.completed / stats.total);
  }

  return traderProgress;
}
```

**Function 5: Apply type diversity filter**

```typescript
function applyTypeDiversityFilter(
  suggestions: QuestSuggestion[]
): QuestSuggestion[] {
  const maxPerType = 2;
  const typeCounts = new Map<string, number>();
  const diverse: QuestSuggestion[] = [];

  for (const suggestion of suggestions) {
    const type = suggestion.quest.questType;
    const count = typeCounts.get(type) || 0;

    if (count < maxPerType) {
      diverse.push(suggestion);
      typeCounts.set(type, count + 1);
    }
  }

  return diverse;
}
```

---

### Step 3: Add New Suggestion Tiers

In the `useMemo` hook, after line 95 (after the chain starters logic), insert:

**Tier 5: Chain completion momentum**

```typescript
// 5. Chain completion momentum - quests in nearly-done chains
const chainProgress = calculateChainCompletionProgress(quests, availableQuests);
const momentumQuests = availableQuests.filter((q) => {
  const progress = chainProgress.get(q.id);
  return progress && progress.completionRate >= 0.6;
});

for (const quest of momentumQuests.slice(0, 2)) {
  if (!results.find((r) => r.quest.id === quest.id)) {
    const progress = chainProgress.get(quest.id)!;
    results.push({
      quest,
      reason: `${progress.completed}/${progress.total} in chain - finish it!`,
      priority: 85 + progress.completionRate * 10,
      icon: "momentum",
    });
  }
}
```

**Tier 6: Map synergy**

```typescript
// 6. Map synergy - boost quests on the same map as other available quests
const mapSynergyCounts = calculateMapSynergy(availableQuests);
const synergyQuests = availableQuests
  .filter((q) => {
    const maps = (q.objectives || []).map((o) => o.map).filter(Boolean);
    return maps.some((m) => (mapSynergyCounts.get(m) || 0) >= 3);
  })
  .sort((a, b) => {
    const aMaps = (a.objectives || []).map((o) => o.map).filter(Boolean);
    const bMaps = (b.objectives || []).map((o) => o.map).filter(Boolean);
    const aMax = Math.max(...aMaps.map((m) => mapSynergyCounts.get(m) || 0));
    const bMax = Math.max(...bMaps.map((m) => mapSynergyCounts.get(m) || 0));
    return bMax - aMax;
  });

for (const quest of synergyQuests.slice(0, 2)) {
  if (!results.find((r) => r.quest.id === quest.id)) {
    const maps = (quest.objectives || []).map((o) => o.map).filter(Boolean);
    const maxSynergy = Math.max(
      ...maps.map((m) => mapSynergyCounts.get(m) || 0)
    );
    const primaryMap = maps.find((m) => mapSynergyCounts.get(m) === maxSynergy);
    results.push({
      quest,
      reason: `${maxSynergy} quests on ${primaryMap} - efficient!`,
      priority: 75 + Math.min(maxSynergy, 10),
      icon: "map",
    });
  }
}
```

**Tier 7: Trader progress**

```typescript
// 7. Trader completion progress
const traderProgress = calculateTraderProgress(quests, availableQuests);
const traderQuests = availableQuests
  .filter((q) => (traderProgress.get(q.traderId) || 0) >= 0.7)
  .sort(
    (a, b) =>
      (traderProgress.get(b.traderId) || 0) -
      (traderProgress.get(a.traderId) || 0)
  );

for (const quest of traderQuests.slice(0, 1)) {
  if (!results.find((r) => r.quest.id === quest.id)) {
    const progress = traderProgress.get(quest.traderId)!;
    results.push({
      quest,
      reason: `${Math.round(progress * 100)}% ${quest.trader.name} done`,
      priority: 70 + progress * 5,
      icon: "trader",
    });
  }
}
```

---

### Step 4: Apply Type Diversity Filter

Replace line 128 (the final sort and slice):

```typescript
// Apply type diversity filter before sorting
const diverse = applyTypeDiversityFilter(results);
return diverse.sort((a, b) => b.priority - a.priority).slice(0, 5);
```

---

### Step 5: Update Icon Rendering

In the `getIcon()` function (around line 131), add two new cases:

```typescript
case "momentum":
  return <Zap className="w-3 h-3 text-orange-400" />;
case "trader":
  return <Star className="w-3 h-3 text-cyan-400" />;
```

---

### Step 6: Add Tooltip Component

Replace lines 150-153 (the header):

```typescript
<div className="flex items-center gap-2 mb-3">
  <Lightbulb className="w-4 h-4 text-[#d4a574]" />
  <span className="text-sm font-medium">Next Up</span>
  <InfoTooltip />
</div>
```

Then add the `InfoTooltip` component at the bottom of the file (before export):

```typescript
function InfoTooltip() {
  return (
    <div className="group relative">
      <button type="button" className="text-muted-foreground hover:text-foreground transition-colors">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 16v-4M12 8h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div className="absolute left-0 top-full mt-2 w-64 bg-popover border rounded-lg p-3 text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-lg">
        <p className="font-medium mb-2">How Next Up Works</p>
        <ul className="space-y-1 text-muted-foreground">
          <li>• Your level and available quests</li>
          <li>• Kappa requirements</li>
          <li>• Quest chains and dependencies</li>
          <li>• Map efficiency and synergy</li>
          <li>• Your trader progress</li>
        </ul>
      </div>
    </div>
  );
}
```

---

## Testing Checklist

- [ ] Suggestions update when quest is completed
- [ ] Chain momentum appears for nearly-complete chains (60%+)
- [ ] Map synergy shows count of other quests on same map
- [ ] Trader progress shows for traders with 70%+ completion
- [ ] Type diversity prevents showing 3+ quests of same type
- [ ] Tooltip displays on hover and contains all 5 bullet points
- [ ] No duplicate quests in suggestions (each appears max once)
- [ ] Priority ordering is correct (higher priority = earlier in list)

**Manual testing scenarios:**

- Test with player level 5 (verify at-level quests show)
- Test with player level 40 (mixed difficulty)
- Test with player level 70 (veteran)
- Test with quests concentrated on one map (should trigger map synergy)
- Test with nearly-complete quest chain like Punisher (4/5 done)
- Test with trader with 80% completion (e.g., Mechanic)
- Verify no more than 2 quests of same type in top 5

---

## Validation

**Pre-commit validation (automatic):**

- ESLint will check formatting
- TypeScript will check types

**Pre-push validation (automatic):**

- Full TypeScript check
- All tests must pass
- Production build must succeed

**Manual verification:**

- npm run dev
- Navigate to quests page
- Verify Next Up panel shows updated suggestions

---

## Key Files Reference

**Current implementation:**

- `apps/web/src/components/next-up/NextUpPanel.tsx` - Component to modify

**Types:**

- `QuestWithProgress` - Type for quest data (from @/types)
- Has: `id`, `title`, `levelRequired`, `kappaRequired`, `questType`, `objectives`, `traderId`, `trader`, `dependsOn`, `computedStatus`

**Data already available:**

- `quests` prop - All quests with progress
- `playerLevel` prop - Current player level
- `computedStatus` field - "available", "completed", "locked"
- Dependencies via `dependsOn` relation
- Objectives with map names

---

## Notes for Implementation

1. **No API calls** - All calculations are client-side using data already in the component
2. **Real-time updates** - Suggestions automatically update via `useMemo` dependency array
3. **Safe to iterate** - We're adding new tiers without changing existing logic
4. **Duplicate prevention** - Check `!results.find((r) => r.quest.id === quest.id)` before pushing
5. **Icon consistency** - New icons use existing lucide-react icons (Zap, Star)

---

## GitHub Issue

Track this work with GitHub issue: Look for "Phase 1: Core Intelligence Improvements" in `.github/ISSUE_TEMPLATE/next-up-phase1.md`

Use the acceptance criteria from the template to verify completion.

---

## Questions?

Refer to:

- Full research: `docs/next-up-enhancement-plan.md`
- Current code: `apps/web/src/components/next-up/NextUpPanel.tsx`
- Type definitions: `packages/types/src/` (look for `QuestWithProgress`)

Good luck! This is a solid enhancement with no risky changes.
