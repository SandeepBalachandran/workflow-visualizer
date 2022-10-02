import { Edge, Node, OnNodesChange, OnEdgesChange, OnConnect } from 'reactflow';

export interface newNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: { nodeType: string; label: string };
}

export type RFState = {
  nodes: Node<newNode>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  updateNodeLabel: (nodeId: string, color: string) => void;
};

export interface templates {
  id: Number;
  title: string;
  method: any;
}

export interface dropdownItems {
  id: Number;
  name: string;
  method: any;
}

export type ToastList = {
  title: string;
  description?: string;
  backgroundColor?: string;
  icon?: string;
  type: string;
};
