/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck - React 19 memo component type compatibility
"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import {
  QuestCardCore,
  QUEST_CARD_WIDTH,
  QUEST_CARD_HEIGHT,
} from "@/components/quest-card";
import { STATUS_COLORS } from "@/lib/trader-colors";
import type { QuestNode as QuestNodeType } from "@/types";

// Re-export for backwards compatibility
export {
  QUEST_CARD_WIDTH as QUEST_NODE_WIDTH,
  QUEST_CARD_HEIGHT as QUEST_NODE_HEIGHT,
};
export const QUEST_NODE_WIDTH_MOBILE = 130;
export const QUEST_NODE_HEIGHT_MOBILE = 58;

// Static handle style
const HANDLE_STYLE = { backgroundColor: STATUS_COLORS.locked.primary };

function QuestNodeComponent({ data }: NodeProps<QuestNodeType>) {
  const {
    quest,
    onStatusChange,
    onDetails,
    isRoot,
    isLeaf,
    isFocused,
    isInFocusChain,
    hasFocusMode,
    playerLevel,
    mapFilter,
    isSaving,
    isKeyboardSelected,
  } = data;

  // Should this node be dimmed? (focus mode active but not in chain)
  const isDimmed = hasFocusMode && !isInFocusChain && !isFocused;

  return (
    <>
      {/* Only show left handle if quest has dependencies (not a root node) */}
      {!isRoot && (
        <Handle
          type="target"
          position={Position.Left}
          className="!w-1.5 !h-1.5"
          style={HANDLE_STYLE}
        />
      )}
      <QuestCardCore
        quest={quest}
        playerLevel={playerLevel}
        onOpenDetails={onDetails}
        onCycleStatus={onStatusChange}
        showProgressBar
        mapFilter={mapFilter}
        compact
        isSaving={isSaving}
        isFocused={isFocused}
        isInFocusChain={isInFocusChain}
        isDimmed={isDimmed}
        isRoot={isRoot}
        isLeaf={isLeaf}
        isKeyboardSelected={isKeyboardSelected}
      />
      {/* Only show right handle if quest has dependents (not a leaf node) */}
      {!isLeaf && (
        <Handle
          type="source"
          position={Position.Right}
          className="!w-1.5 !h-1.5"
          style={HANDLE_STYLE}
        />
      )}
    </>
  );
}

export const QuestNode = memo(QuestNodeComponent);
