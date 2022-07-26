export default  [
  { id: "StartToProcess", source: "startNode", target: "processNode" },
  { id: "processNodeEdge1", source: "processNode", target: "processNode2" },
  { id: "processNodeEdge2", source: "processNode2", target: "processNode3" },
  { id: "processNodeEdge3", source: "processNode3", target: "processNode4" },
  { id: "decisionNodeEdge1", source: "processNode4", target: "decisionNode", targetHandle: "decisionTarget1" },
  { id: "decisionNodeEdge2", source: "decisionNode", target: "processNode5", sourceHandle: "decisionSource2", label: "No" },
  { id: "processNodeEdge4", source: "processNode5", target: "processNode6" },
  { id: "processNodeEdge5", source: "processNode6", target: "processNode7" },
  { id: "decisionNodeEdge3", source: "processNode7", target: "decisionNode", targetHandle: "decisionTarget2" },
  { id: "decisionNodeEdge4", source: "decisionNode", target: "endNode", sourceHandle: "decisionSource1", targetHandle: "targetEnd1", label: "Yes" },
];
