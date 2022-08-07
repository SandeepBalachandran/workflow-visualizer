import create  from "zustand";
import { Connection, Edge, EdgeChange, Node, NodeChange, addEdge, OnNodesChange, OnEdgesChange, OnConnect, applyNodeChanges, applyEdgeChanges } from "react-flow-renderer";
import { persist } from "zustand/middleware";
import initialNodes from "../utils/nodes";
import initialEdges from "../utils/edges";
import { newNode } from "../models/models";

export type NodeData = {
  color: string;
};

export type RFState = {
  nodes: Node<NodeData>[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  updateNodeLabel: (nodeId: string, color: string) => void;
};

export interface SessionData {
  token?: string;
  refreshToken?: string;
  expiredAt?: number;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
}



const useStore = create<any>(
  persist<any>(
    (set, get) => ({
      nodes: initialNodes,
      edges: initialEdges,
      onNodesChange: (changes: NodeChange[]) => {
        set({
          nodes: applyNodeChanges(changes, get().nodes),
        });
      },

      onEdgesChange: (changes: EdgeChange[]) => {
        set({
          edges: applyEdgeChanges(changes, get().edges),
        });
      },

      onConnect: (connection: Connection) => {
        set({
          edges: addEdge(connection, get().edges),
        });
      },

      updateNodeLabel: (newLabel: string, selectedId: string) => {
        set({
          nodes: get().nodes.map((currentElement:newNode) => {
            if (currentElement.id === selectedId) {
              return {
                ...currentElement,
                data: { ...currentElement.data, label: newLabel },
              };
            }
            return currentElement;
          }),
        });
        console.log(get().nodes);
        console.log(get().edges);
      },
    }),
    {
      name: "flow-storage", // unique key name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
