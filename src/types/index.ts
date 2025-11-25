import type { Node, Edge } from "@xyflow/react";

// Quest status enum
export type QuestStatus = "locked" | "available" | "in_progress" | "completed";

// Trader from database
export interface Trader {
  id: string;
  name: string;
  color: string;
}

// Objective from database
export interface Objective {
  id: string;
  description: string;
  map: string | null;
  questId: string;
}

// Quest dependency shape from API
export interface QuestDependency {
  requiredQuest: Quest;
}

export interface QuestDependent {
  dependentQuest: Quest;
}

// Quest from database
export interface Quest {
  id: string;
  title: string;
  wikiLink: string | null;
  levelRequired: number;
  kappaRequired: boolean;
  traderId: string;
  trader: Trader;
  objectives: Objective[];
  dependsOn: QuestDependency[];
  dependedOnBy: QuestDependent[];
}

// Quest progress from database
export interface QuestProgress {
  id: string;
  status: QuestStatus;
  completedAt: Date | null;
  userId: string;
  questId: string;
}

// Quest with progress for frontend
export interface QuestWithProgress extends Quest {
  progress: QuestProgress | null;
  computedStatus: QuestStatus;
}

// Filter options for quest list/tree
export interface QuestFilters {
  traderId: string | null;
  status: QuestStatus | null;
  search: string;
  kappaOnly: boolean;
  map: string | null;
}

// React Flow node data for quest nodes
export interface QuestNodeData extends Record<string, unknown> {
  quest: QuestWithProgress;
  isSelected: boolean;
  onStatusChange: (questId: string, status: QuestStatus) => void;
  onClick: (questId: string) => void;
}

// React Flow quest node type
export type QuestNode = Node<QuestNodeData, "quest">;

// React Flow edge data for dependency edges
export interface QuestEdgeData extends Record<string, unknown> {
  sourceStatus: QuestStatus;
  targetStatus: QuestStatus;
}

// React Flow quest edge type
export type QuestEdge = Edge<QuestEdgeData>;

// API response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface QuestsResponse {
  quests: QuestWithProgress[];
  traders: Trader[];
}

export interface ProgressUpdateRequest {
  questId: string;
  status: QuestStatus;
}

export interface ProgressUpdateResponse {
  progress: QuestProgress;
  unlockedQuests?: string[];
}
