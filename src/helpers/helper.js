const addNewNode = ({label ,type, nodeType, id}) => {
  const newNode = {
    id,
    type,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100,
    },
    data: {
      nodeType,
      label
    },
  };
  return newNode;
};

export default addNewNode;



