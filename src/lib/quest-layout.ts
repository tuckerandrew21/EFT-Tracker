import dagre from "dagre";
import type { QuestWithProgress, QuestNode, QuestEdge, QuestStatus } from "@/types";
import { QUEST_NODE_WIDTH, QUEST_NODE_HEIGHT } from "@/components/quest-tree/QuestNode";

const LAYOUT_CONFIG = {
  rankdir: "LR" as const, // Left-to-right layout
  nodesep: 35, // Vertical spacing between nodes (tighter grouping)
  ranksep: 160, // Horizontal spacing (more room for horizontal edges)
  marginx: 50,
  marginy: 30,
};

interface BuildQuestGraphOptions {
  onStatusChange: (questId: string, status: QuestStatus) => void;
  onClick: (questId: string) => void;
  onFocus: (questId: string) => void;
  selectedQuestId?: string | null;
  focusedQuestId?: string | null;
  focusChain?: Set<string>;
}

export interface QuestGraph {
  nodes: QuestNode[];
  edges: QuestEdge[];
}

/**
 * Calculate the full dependency chain for a quest (prerequisites + dependents)
 */
export function getQuestChain(
  questId: string,
  quests: QuestWithProgress[]
): Set<string> {
  const questMap = new Map(quests.map((q) => [q.id, q]));
  const chain = new Set<string>();

  // Add the focused quest itself
  chain.add(questId);

  // Recursively get all prerequisites (quests this one depends on)
  function getPrerequisites(id: string) {
    const quest = questMap.get(id);
    if (!quest) return;

    for (const dep of quest.dependsOn || []) {
      if (!chain.has(dep.requiredQuest.id)) {
        chain.add(dep.requiredQuest.id);
        getPrerequisites(dep.requiredQuest.id);
      }
    }
  }

  // Recursively get all dependents (quests that depend on this one)
  function getDependents(id: string) {
    const quest = questMap.get(id);
    if (!quest) return;

    for (const dep of quest.dependedOnBy || []) {
      if (!chain.has(dep.dependentQuest.id)) {
        chain.add(dep.dependentQuest.id);
        getDependents(dep.dependentQuest.id);
      }
    }
  }

  getPrerequisites(questId);
  getDependents(questId);

  return chain;
}

export function buildQuestGraph(
  quests: QuestWithProgress[],
  options: BuildQuestGraphOptions
): QuestGraph {
  const { onStatusChange, onClick, onFocus, selectedQuestId, focusedQuestId, focusChain } = options;
  const hasFocusMode = focusedQuestId !== null && focusedQuestId !== undefined;

  // Create a map for quick quest lookup
  const questMap = new Map(quests.map((q) => [q.id, q]));

  // Create Dagre graph
  const g = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph(LAYOUT_CONFIG);

  // Add nodes
  for (const quest of quests) {
    g.setNode(quest.id, {
      width: QUEST_NODE_WIDTH,
      height: QUEST_NODE_HEIGHT,
    });
  }

  // Add edges (from required quest to dependent quest)
  const edges: QuestEdge[] = [];
  for (const quest of quests) {
    for (const dep of quest.dependsOn || []) {
      const requiredQuest = questMap.get(dep.requiredQuest.id);
      if (requiredQuest) {
        g.setEdge(dep.requiredQuest.id, quest.id);

        // Check if this edge is part of the focus chain
        const isEdgeInFocusChain = focusChain?.has(quest.id) && focusChain?.has(dep.requiredQuest.id);
        const shouldDimEdge = hasFocusMode && !isEdgeInFocusChain;

        edges.push({
          id: `${dep.requiredQuest.id}-${quest.id}`,
          source: dep.requiredQuest.id,
          target: quest.id,
          type: "default", // Bezier curves for smoother flow
          animated: quest.computedStatus === "available" && !shouldDimEdge,
          style: {
            stroke: shouldDimEdge
              ? "#D1D5DB" // Dim gray when not in focus chain
              : quest.computedStatus === "completed"
                ? "#10B981"
                : quest.computedStatus === "available"
                  ? "#3B82F6"
                  : quest.computedStatus === "locked"
                    ? "#6B7280"
                    : "#9CA3AF",
            strokeWidth: isEdgeInFocusChain ? 3 : (quest.kappaRequired ? 3 : 2),
            opacity: shouldDimEdge ? 0.2 : (quest.computedStatus === "locked" ? 0.4 : 1),
          },
          data: {
            sourceStatus: requiredQuest.computedStatus,
            targetStatus: quest.computedStatus,
          },
        });
      }
    }
  }

  // Run Dagre layout
  dagre.layout(g);

  // Find root quests (no incoming edges / no dependencies)
  const rootQuestIds = new Set(
    quests.filter((q) => !q.dependsOn?.length).map((q) => q.id)
  );

  // Find leaf quests (no outgoing edges / no dependents)
  const leafQuestIds = new Set(
    quests.filter((q) => !q.dependedOnBy?.length).map((q) => q.id)
  );

  // Find the minimum x position among root quests to align them at the left
  let minRootX = Infinity;
  for (const questId of rootQuestIds) {
    const node = g.node(questId);
    if (node && node.x < minRootX) {
      minRootX = node.x;
    }
  }

  // Calculate shift to align roots at left margin
  const shiftX = minRootX - QUEST_NODE_WIDTH / 2 - LAYOUT_CONFIG.marginx;

  // Convert to React Flow nodes with adjusted positions
  const nodes: QuestNode[] = quests.map((quest) => {
    const nodeWithPosition = g.node(quest.id);
    const isInFocusChain = focusChain?.has(quest.id) ?? false;
    return {
      id: quest.id,
      type: "quest",
      position: {
        // Dagre returns center position, adjust to top-left for React Flow
        // Also shift all nodes left so roots align at the margin
        x: nodeWithPosition.x - QUEST_NODE_WIDTH / 2 - shiftX,
        y: nodeWithPosition.y - QUEST_NODE_HEIGHT / 2,
      },
      data: {
        quest,
        isSelected: quest.id === selectedQuestId,
        isRoot: rootQuestIds.has(quest.id),
        isLeaf: leafQuestIds.has(quest.id),
        isFocused: quest.id === focusedQuestId,
        isInFocusChain,
        hasFocusMode,
        onStatusChange,
        onClick,
        onFocus,
      },
    };
  });

  return { nodes, edges };
}

// Filter quests by trader and return subgraph
export function filterQuestsByTrader(
  quests: QuestWithProgress[],
  traderId: string
): QuestWithProgress[] {
  return quests.filter((q) => q.traderId === traderId);
}

// Get all unique maps from quest objectives
export function getQuestMaps(quests: QuestWithProgress[]): string[] {
  const maps = new Set<string>();
  for (const quest of quests) {
    for (const obj of quest.objectives || []) {
      if (obj.map) {
        maps.add(obj.map);
      }
    }
  }
  return Array.from(maps).sort();
}

// Compute quest status based on dependencies
export function computeQuestStatus(
  quest: QuestWithProgress,
  questMap: Map<string, QuestWithProgress>
): QuestStatus {
  // If user has explicit progress, use that
  if (quest.progress) {
    return quest.progress.status;
  }

  // Check if all dependencies are completed
  const allDepsCompleted = (quest.dependsOn || []).every((dep) => {
    const requiredQuest = questMap.get(dep.requiredQuest.id);
    return requiredQuest?.computedStatus === "completed";
  });

  // If no dependencies or all completed, quest is available
  if (quest.dependsOn?.length === 0 || allDepsCompleted) {
    return "available";
  }

  return "locked";
}
