"use client";

import { useCallback, useMemo } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type NodeTypes,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { QuestNode } from "./QuestNode";
import { buildQuestGraph } from "@/lib/quest-layout";
import { getTraderColor } from "@/lib/trader-colors";
import type { QuestWithProgress, QuestStatus, QuestNodeData } from "@/types";

// Register custom node types
const nodeTypes: NodeTypes = {
  quest: QuestNode,
};

interface QuestTreeProps {
  quests: QuestWithProgress[];
  selectedQuestId?: string | null;
  onQuestSelect: (questId: string) => void;
  onStatusChange: (questId: string, status: QuestStatus) => void;
}

export function QuestTree({
  quests,
  selectedQuestId,
  onQuestSelect,
  onStatusChange,
}: QuestTreeProps) {
  // Build graph with layout
  const { initialNodes, initialEdges } = useMemo(() => {
    const graph = buildQuestGraph(quests, {
      onStatusChange,
      onClick: onQuestSelect,
      selectedQuestId,
    });
    return {
      initialNodes: graph.nodes,
      initialEdges: graph.edges,
    };
  }, [quests, selectedQuestId, onStatusChange, onQuestSelect]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes when quests or selection changes
  useMemo(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  // MiniMap node color based on trader
  const getNodeColor = useCallback((node: { data: Record<string, unknown> }) => {
    const data = node.data as QuestNodeData | undefined;
    if (data?.quest) {
      return getTraderColor(data.quest.traderId).primary;
    }
    return "#6B7280";
  }, []);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2,
          maxZoom: 1,
        }}
        minZoom={0.1}
        maxZoom={2}
        defaultEdgeOptions={{
          type: "smoothstep",
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
        <Controls showInteractive={false} />
        <MiniMap
          nodeColor={getNodeColor}
          nodeStrokeWidth={3}
          zoomable
          pannable
          className="!bg-background/80 !border-border"
        />
      </ReactFlow>
    </div>
  );
}

export default QuestTree;
