"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
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

// Hook to detect mobile screens
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

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
  const isMobile = useIsMobile();

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
    <div className="w-full h-full touch-pan-x touch-pan-y">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: isMobile ? 0.1 : 0.2,
          maxZoom: isMobile ? 0.8 : 1,
        }}
        minZoom={0.05}
        maxZoom={isMobile ? 1.5 : 2}
        defaultEdgeOptions={{
          type: "smoothstep",
        }}
        proOptions={{ hideAttribution: true }}
        panOnScroll={!isMobile}
        zoomOnScroll={!isMobile}
        panOnDrag={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={true}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
        <Controls
          showInteractive={false}
          className="!shadow-md"
          position={isMobile ? "bottom-left" : "bottom-left"}
        />
        {/* Hide MiniMap on mobile for more screen space */}
        {!isMobile && (
          <MiniMap
            nodeColor={getNodeColor}
            nodeStrokeWidth={3}
            zoomable
            pannable
            className="!bg-background/80 !border-border"
          />
        )}
      </ReactFlow>
    </div>
  );
}

export default QuestTree;
