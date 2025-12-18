import { useEffect } from "react";
import { Node } from "@xyflow/react";
import type { QuestNodeData, QuestStatus } from "@/types";

interface UseQuestKeyboardNavProps {
  questNodes: Node<QuestNodeData>[];
  keyboardSelectedId: string | null;
  focusedQuestId: string | null;
  onKeyboardSelect: (questId: string | null) => void;
  onStatusChange: (questId: string, status: QuestStatus) => void;
  onQuestDetails?: (questId: string) => void;
  onFocus: (questId: string) => void;
  fitView: (options?: {
    nodes?: Node[];
    duration?: number;
    padding?: number;
    maxZoom?: number;
  }) => void;
  findNearestNode: (
    currentId: string,
    direction: "up" | "down" | "left" | "right"
  ) => string | null;
  nodesRef: React.MutableRefObject<Node[]>;
}

export function useQuestKeyboardNav({
  questNodes,
  keyboardSelectedId,
  focusedQuestId,
  onKeyboardSelect,
  onStatusChange,
  onQuestDetails,
  onFocus,
  fitView,
  findNearestNode,
  nodesRef,
}: UseQuestKeyboardNavProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle if user is typing in an input
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // ESC exits focus mode
      if (e.key === "Escape") {
        if (focusedQuestId) {
          onFocus(focusedQuestId); // Toggle off
        } else if (keyboardSelectedId) {
          onKeyboardSelect(null);
        }
        return;
      }

      // Arrow keys for navigation
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();

        // If no node selected, select the first quest node
        if (!keyboardSelectedId) {
          const firstQuest = questNodes[0];
          if (firstQuest) {
            onKeyboardSelect(firstQuest.id);
          }
          return;
        }

        const direction = e.key.replace("Arrow", "").toLowerCase() as
          | "up"
          | "down"
          | "left"
          | "right";
        const nextId = findNearestNode(keyboardSelectedId, direction);
        if (nextId) {
          onKeyboardSelect(nextId);
          // Center view on the selected node
          const node = nodesRef.current.find((n) => n.id === nextId);
          if (node) {
            fitView({
              nodes: [node],
              duration: 150,
              padding: 0.5,
              maxZoom: 1.5,
            });
          }
        }
        return;
      }

      // Only handle action keys if a node is selected
      if (!keyboardSelectedId) return;

      const selectedNode = nodesRef.current.find(
        (n) => n.id === keyboardSelectedId
      );
      const data = selectedNode?.data as QuestNodeData | undefined;
      if (!data?.quest) return;

      // Enter: Toggle quest status
      if (e.key === "Enter") {
        e.preventDefault();
        onStatusChange(data.quest.id, data.quest.computedStatus);
        return;
      }

      // Space: Open quest details
      if (e.key === " ") {
        e.preventDefault();
        if (onQuestDetails) {
          onQuestDetails(data.quest.id);
        }
        return;
      }

      // F: Enter focus mode on selected quest
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        onFocus(data.quest.id);
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    questNodes,
    keyboardSelectedId,
    focusedQuestId,
    onKeyboardSelect,
    onStatusChange,
    onQuestDetails,
    onFocus,
    fitView,
    findNearestNode,
    nodesRef,
  ]);
}
