const addNewNode = ({ label, type, nodeType, id }) => {
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

const nodeColor = (node) => {
  const nodeColor = {
    startEndNode: "#000",
    processNode: "#784be8",
    decisionNode: "#ff653b",
    default: "#eee",
  };
  return nodeColor[node.type];
};

const nodeStrokeColor = (node) => {
  const nodeColor = {
    startEndNode: "#000",
    processNode: "#784be8",
    decisionNode: "#ff653b",
    default: "#eee",
  };
  return nodeColor[node.type];
};

const edgeOptions = {
  animated: false,
  style: {
    stroke: "white",
    strokeWidth: 5,
  },
  markerEnd: { type: "arrowclosed", color: "black" },
  className: "customArrow",
  type: "step",
};

const flowstyle = {
  backgroundColor: "#B8CEFF",
};

export { addNewNode, nodeColor, nodeStrokeColor, edgeOptions, flowstyle };
