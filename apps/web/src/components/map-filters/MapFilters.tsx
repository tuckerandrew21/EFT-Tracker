"use client";

import { useEffect, useRef, useCallback } from "react";
import { useSession } from "next-auth/react";
import { ProgressStats } from "@/components/progress-stats";
import { QuestTypeMultiSelect } from "@/components/quest-tree";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getTraderColor } from "@/lib/trader-colors";
import { useUserPrefsContext } from "@/providers/UserPrefsProvider";
import type {
  Trader,
  QuestFilters as Filters,
  QuestWithProgress,
} from "@/types";

interface MapFiltersProps {
  traders: Trader[];
  quests: QuestWithProgress[];
  filters: Filters;
  onFilterChange: (filters: Partial<Filters>) => void;
  onApplyFilters: () => void;
}

export function MapFilters({
  traders,
  quests,
  filters,
  onFilterChange,
  onApplyFilters,
}: MapFiltersProps) {
  const { data: session, status: sessionStatus } = useSession();
  const { prefs, isLoading: prefsLoading } = useUserPrefsContext();
  const initialPrefsLoaded = useRef(false);
  const prefsFullyLoaded = useRef(false);
  const lastSavedLevel = useRef<number | null>(null);
  const lastSavedBypassLevel = useRef<boolean>(false);

  // Stable ref for onApplyFilters to avoid infinite loops
  const onApplyFiltersRef = useRef(onApplyFilters);
  useEffect(() => {
    onApplyFiltersRef.current = onApplyFilters;
  });

  // Load user's saved preferences from context when they load
  useEffect(() => {
    // For non-authenticated users, mark prefs as loaded immediately
    if (sessionStatus === "unauthenticated" && !prefsFullyLoaded.current) {
      prefsFullyLoaded.current = true;
    }

    if (sessionStatus === "authenticated" && !initialPrefsLoaded.current) {
      // Wait for prefs to load
      if (prefsLoading || !prefs) return;

      initialPrefsLoaded.current = true;

      const updates: Partial<Filters> = {};
      if (prefs.playerLevel != null) {
        lastSavedLevel.current = prefs.playerLevel;
        updates.playerLevel = prefs.playerLevel;
      }
      if (prefs.bypassLevelRequirement != null) {
        lastSavedBypassLevel.current = prefs.bypassLevelRequirement;
        updates.bypassLevelRequirement = prefs.bypassLevelRequirement;
      }

      if (Object.keys(updates).length > 0) {
        onFilterChange(updates);
        setTimeout(() => onApplyFiltersRef.current(), 0);
      }
      prefsFullyLoaded.current = true;
    }
  }, [sessionStatus, prefs, prefsLoading, onFilterChange]);

  // Auto-save player level when it changes (debounced)
  const savePlayerLevel = useCallback(
    async (level: number | null) => {
      if (!session?.user) return;
      if (level === lastSavedLevel.current) return;

      try {
        const res = await fetch("/api/user", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ playerLevel: level }),
        });
        if (res.ok) {
          lastSavedLevel.current = level;
        }
      } catch (err) {
        console.error("Failed to save player level:", err);
      }
    },
    [session?.user]
  );

  useEffect(() => {
    if (sessionStatus !== "authenticated") return;
    if (!prefsFullyLoaded.current) return;

    const timer = setTimeout(() => {
      savePlayerLevel(filters.playerLevel);
    }, 1000);

    return () => clearTimeout(timer);
  }, [filters.playerLevel, sessionStatus, savePlayerLevel]);

  // Auto-save bypassLevelRequirement when it changes
  const saveBypassLevelRequirement = useCallback(
    async (bypass: boolean) => {
      if (!session?.user) return;
      if (bypass === lastSavedBypassLevel.current) return;

      try {
        const res = await fetch("/api/user", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bypassLevelRequirement: bypass }),
        });
        if (res.ok) {
          lastSavedBypassLevel.current = bypass;
        }
      } catch (err) {
        console.error("Failed to save bypass level requirement:", err);
      }
    },
    [session?.user]
  );

  useEffect(() => {
    if (sessionStatus !== "authenticated") return;
    if (!prefsFullyLoaded.current) return;

    const timer = setTimeout(() => {
      saveBypassLevelRequirement(filters.bypassLevelRequirement);
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    filters.bypassLevelRequirement,
    sessionStatus,
    saveBypassLevelRequirement,
  ]);

  // Auto-apply filter change
  const handleFilterChange = useCallback(
    (update: Partial<Filters>) => {
      onFilterChange(update);
      setTimeout(() => onApplyFiltersRef.current(), 0);
    },
    [onFilterChange]
  );

  // Debounced level change (don't auto-apply immediately while typing)
  const levelChangeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const handleLevelChange = useCallback(
    (level: number | null) => {
      onFilterChange({ playerLevel: level });

      if (levelChangeTimerRef.current) {
        clearTimeout(levelChangeTimerRef.current);
      }
      levelChangeTimerRef.current = setTimeout(() => {
        onApplyFiltersRef.current();
      }, 500);
    },
    [onFilterChange]
  );

  return (
    <div className="bg-background border-b">
      {/* Desktop & Mobile Layout - single row */}
      <div className="px-4 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Trader */}
          <Select
            value={filters.traderId || "all"}
            onValueChange={(value) =>
              handleFilterChange({
                traderId: value === "all" ? null : value,
              })
            }
          >
            <SelectTrigger className="h-9 w-[140px]">
              <SelectValue placeholder="All Traders" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Traders</SelectItem>
              {traders.map((trader) => (
                <SelectItem key={trader.id} value={trader.id}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: getTraderColor(trader.id).primary,
                      }}
                    />
                    {trader.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Level */}
          <div className="flex items-center gap-2">
            <Label htmlFor="player-level" className="text-sm whitespace-nowrap">
              Level:
            </Label>
            <input
              id="player-level"
              type="number"
              min={1}
              max={79}
              placeholder="1-79"
              value={filters.playerLevel ?? ""}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                const level = isNaN(val)
                  ? null
                  : Math.min(79, Math.max(1, val));
                handleLevelChange(level);
              }}
              className="h-9 w-16 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              disabled={filters.bypassLevelRequirement}
            />
          </div>

          {/* All Levels */}
          <div className="flex items-center gap-1.5">
            <Switch
              id="bypass-level"
              checked={filters.bypassLevelRequirement}
              onCheckedChange={(checked) =>
                handleFilterChange({ bypassLevelRequirement: checked })
              }
            />
            <Label
              htmlFor="bypass-level"
              className="text-sm cursor-pointer whitespace-nowrap"
            >
              All Levels
            </Label>
          </div>

          {/* Kappa */}
          <div className="flex items-center gap-1.5">
            <Switch
              id="kappa-only"
              checked={filters.kappaOnly}
              onCheckedChange={(checked) =>
                handleFilterChange({ kappaOnly: checked })
              }
            />
            <Label
              htmlFor="kappa-only"
              className="text-sm cursor-pointer whitespace-nowrap"
            >
              Kappa Only
            </Label>
          </div>

          {/* Quest Type */}
          <QuestTypeMultiSelect
            selectedTypes={filters.questTypes}
            onChange={(types) => handleFilterChange({ questTypes: types })}
          />
        </div>

        {/* Progress Stats */}
        <div className="hidden sm:block">
          <ProgressStats quests={quests} traders={traders} />
        </div>
      </div>
    </div>
  );
}
