import create from 'zustand';
import {
  Connection,
  EdgeChange,
  NodeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'react-flow-renderer';
import { persist } from 'zustand/middleware';
import initialNodes from '../utils/nodes';
import initialEdges from '../utils/edges';
import { newNode } from '../models/models';

const useStore = create<any>(
  persist(
    (set, get) => ({
      nodes: [],
      edges: [],
      onNodesChange: (changes: NodeChange[]) => {
        // console.log(changes);
        set({
          nodes: applyNodeChanges(changes, get().nodes),
        });
        // console.log(get().nodes)
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
          nodes: get().nodes.map((currentElement: newNode) => {
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
      deleteAll: () => {
        set({
          nodes: [],
          edges: [],
        });
      },
      setLabProcedureFlow: () => {
        set({
          nodes: initialNodes,
          edges: initialEdges,
        });
      },
      setCustom: ({ nodes, edges }: { nodes: object; edges: object }) => {
        set({
          nodes,
          edges,
        });
      },
    }),
    {
      name: 'flow-storage', // unique key name
      getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
