"use client";

import { useState, useEffect, useCallback } from "react";
import type {
  QuestWithProgress,
  Trader,
  QuestFilters,
  QuestStatus,
} from "@/types";

interface UseQuestsReturn {
  quests: QuestWithProgress[];
  traders: Trader[];
  loading: boolean;
  error: string | null;
  filters: QuestFilters;
  setFilters: (filters: Partial<QuestFilters>) => void;
  refetch: () => Promise<void>;
}

const defaultFilters: QuestFilters = {
  traderId: null,
  status: null,
  search: "",
  kappaOnly: false,
  map: null,
  playerLevel: null,
  levelRange: null,
};

export function useQuests(): UseQuestsReturn {
  const [quests, setQuests] = useState<QuestWithProgress[]>([]);
  const [traders, setTraders] = useState<Trader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFiltersState] = useState<QuestFilters>(defaultFilters);

  const fetchTraders = useCallback(async () => {
    try {
      const res = await fetch("/api/traders");
      if (!res.ok) throw new Error("Failed to fetch traders");
      const data = await res.json();
      setTraders(data.traders);
    } catch (err) {
      console.error("Error fetching traders:", err);
    }
  }, []);

  const fetchQuests = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (filters.traderId) params.set("trader", filters.traderId);
      if (filters.map) params.set("map", filters.map);
      if (filters.kappaOnly) params.set("kappa", "true");
      if (filters.search) params.set("search", filters.search);

      const res = await fetch(`/api/quests?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch quests");

      const data = await res.json();

      // Client-side filtering
      let filteredQuests = data.quests;

      // Status filtering
      if (filters.status) {
        filteredQuests = filteredQuests.filter(
          (q: QuestWithProgress) => q.computedStatus === filters.status
        );
      }

      // Level range filtering
      if (filters.levelRange) {
        filteredQuests = filteredQuests.filter(
          (q: QuestWithProgress) =>
            q.levelRequired >= filters.levelRange!.min &&
            q.levelRequired <= filters.levelRange!.max
        );
      }

      setQuests(filteredQuests);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  const setFilters = useCallback((newFilters: Partial<QuestFilters>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const refetch = useCallback(async () => {
    await fetchQuests();
  }, [fetchQuests]);

  // Initial fetch
  useEffect(() => {
    fetchTraders();
  }, [fetchTraders]);

  useEffect(() => {
    fetchQuests();
  }, [fetchQuests]);

  return {
    quests,
    traders,
    loading,
    error,
    filters,
    setFilters,
    refetch,
  };
}

// Hook for updating quest progress
export function useQuestProgress() {
  const [updating, setUpdating] = useState(false);

  const updateStatus = useCallback(
    async (questId: string, status: QuestStatus): Promise<boolean> => {
      setUpdating(true);
      try {
        const res = await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ questId, status }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to update progress");
        }

        return true;
      } catch (err) {
        console.error("Error updating progress:", err);
        return false;
      } finally {
        setUpdating(false);
      }
    },
    []
  );

  return { updateStatus, updating };
}
