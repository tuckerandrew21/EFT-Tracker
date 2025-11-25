declare module "@dagrejs/dagre" {
  export const graphlib: {
    Graph: new () => Graph;
  };

  export interface Graph {
    setDefaultEdgeLabel(fn: () => Record<string, unknown>): Graph;
    setGraph(config: GraphConfig): void;
    setNode(id: string, config: NodeConfig): void;
    setEdge(sourceId: string, targetId: string): void;
    node(id: string): NodeWithPosition;
  }

  export interface GraphConfig {
    rankdir?: "TB" | "BT" | "LR" | "RL";
    nodesep?: number;
    ranksep?: number;
    marginx?: number;
    marginy?: number;
  }

  export interface NodeConfig {
    width: number;
    height: number;
  }

  export interface NodeWithPosition {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  export function layout(graph: Graph): void;

  const dagre: {
    graphlib: typeof graphlib;
    layout: typeof layout;
  };

  export default dagre;
}
