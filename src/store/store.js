import create from "zustand";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "react-flow-renderer";
import initialNodes from "../utils/nodes";
import initialEdges from "../utils/edges";

const useStore = create((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },

  updateNodeLabel: (newLabel, selectedId) => {
    set({
      nodes: get().nodes.map((currentElement) => {
        if (currentElement.id === selectedId) {
          return {
            ...currentElement,
            data: { ...currentElement.data, label: newLabel },
          };
        }
        return currentElement
      }),
    });
    console.log(get().nodes)
    console.log(get().edges)
  },
}));

export default useStore;
