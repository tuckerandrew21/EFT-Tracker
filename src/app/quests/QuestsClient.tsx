"use client";

import { useState, useCallback } from "react";
import { QuestTree, QuestFilters } from "@/components/quest-tree";
import { useQuests, useQuestProgress } from "@/hooks/useQuests";
import type { QuestStatus } from "@/types";

export function QuestsClient() {
  const { quests, traders, loading, error, filters, setFilters, refetch } =
    useQuests();
  const { updateStatus } = useQuestProgress();
  const [selectedQuestId, setSelectedQuestId] = useState<string | null>(null);

  const handleQuestSelect = useCallback((questId: string) => {
    setSelectedQuestId((prev) => (prev === questId ? null : questId));
  }, []);

  const handleStatusChange = useCallback(
    async (questId: string, status: QuestStatus) => {
      const success = await updateStatus(questId, status);
      if (success) {
        await refetch();
      }
    },
    [updateStatus, refetch]
  );

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading quests...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-destructive">
          <p className="text-lg font-medium">Error loading quests</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <QuestFilters
        traders={traders}
        filters={filters}
        onFilterChange={setFilters}
      />
      <div className="flex-1 min-h-0">
        {quests.length > 0 ? (
          <QuestTree
            quests={quests}
            selectedQuestId={selectedQuestId}
            onQuestSelect={handleQuestSelect}
            onStatusChange={handleStatusChange}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground">
              No quests found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
