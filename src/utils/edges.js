const   initialEdges = [
  { id: "StartToProcess", source: "startNode_1", target: "processNode_1" },
  { id: "processNodeEdge1", source: "processNode_1", target: "processNode_2" },
  { id: "processNodeEdge2", source: "processNode_2", target: "processNode_3" },
  { id: "processNodeEdge3", source: "processNode_3", target: "processNode_4" },
  { id: "decisionNodeEdge1", source: "processNode_4", target: "decisionNode_1", targetHandle: "decisionTarget1" },
  { id: "decisionNodeEdge2", source: "decisionNode_1", target: "processNode_5", sourceHandle: "decisionSource2", label: "No" },
  { id: "processNodeEdge4", source: "processNode_5", target: "processNode_6" },
  { id: "processNodeEdge5", source: "processNode_6", target: "processNode_7" },
  { id: "decisionNodeEdge3", source: "processNode_7", target: "decisionNode_1", targetHandle: "decisionTarget2" },
  { id: "decisionNodeEdge4", source: "decisionNode_1", target: "endNode_1", sourceHandle: "decisionSource1", targetHandle: "targetEnd1", label: "Yes" },
];

export default initialEdges;