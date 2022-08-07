import { DefaultEdgeOptions, MarkerType, Node } from "react-flow-renderer";
import { newNode } from "../models/models";

const addNewNode = ({
  label,
  type,
  nodeType,
  id,
}: {
  label: string;
  type: string;
  nodeType: string;
  id: string;
}): newNode => {
  const newNode = {
    id,
    type,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100,
    },
    data: {
      nodeType,
      label,
    },
  };
  return newNode;
};

export interface miniMapColors {
  startEndNode: string;
  processNode: string;
  decisionNode: string;
  default: string;
}

const nodeColor = (node: Node): any => {
  const nodeColor: any = {
    startEndNode: "#000",
    processNode: "#784be8",
    decisionNode: "#ff653b",
    default: "#eee",
  };
  return nodeColor[node.type!];
};

const nodeStrokeColor = (node: Node): any => {
  const nodeColor: any = {
    startEndNode: "#000",
    processNode: "#784be8",
    decisionNode: "#ff653b",
    default: "#eee",
  };
  return nodeColor[node.type!];
};

const edgeOptions: DefaultEdgeOptions = {
  animated: false,
  style: {
    stroke: "white",
    strokeWidth: 5,
  },
  markerEnd: { type: MarkerType.ArrowClosed , color: "black" },
  className: "customArrow",
  type: "step",
};

const flowstyle = {
  backgroundColor: "#B8CEFF",
};

export { addNewNode, nodeColor, nodeStrokeColor, edgeOptions, flowstyle };