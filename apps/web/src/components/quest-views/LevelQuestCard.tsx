/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck - React 19 memo component type compatibility
"use client";

import { QuestCardCore } from "@/components/quest-card";
import type { QuestWithProgress, QuestStatus } from "@/types";

interface LevelQuestCardProps {
  quest: QuestWithProgress;
  playerLevel?: number | null;
  onStatusChange: (questId: string, status: QuestStatus) => void;
  onQuestDetails?: (questId: string) => void;
}

export function LevelQuestCard({
  quest,
  playerLevel,
  onStatusChange,
  onQuestDetails,
}: LevelQuestCardProps) {
  return (
    <QuestCardCore
      quest={quest}
      playerLevel={playerLevel}
      onOpenDetails={onQuestDetails}
      onCycleStatus={onStatusChange}
      showTraderName
    />
  );
}
