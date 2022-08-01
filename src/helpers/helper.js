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
  console.log(newNode)
  return newNode;
};

const nodeColor = (node) => {
  switch (node.type) {
    case "startEndNode":
      return "#000";
    case "processNode":
      return "#784be8";
    case "decisionNode":
      return "#ff653b";
    default:
      return "#eee";
  }
};

const nodeStrokeColor = (node) => {
  switch (node.type) {
    case "startEndNode":
      return "#000";
    case "processNode":
      return "#784be8";
    case "decisionNode":
      return "#ff653b";
    default:
      return "#eee";
  }
};

export { addNewNode, nodeColor, nodeStrokeColor };
