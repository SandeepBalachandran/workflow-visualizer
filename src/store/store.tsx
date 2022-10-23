import create from 'zustand';
import {
  Connection,
  EdgeChange,
  NodeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow';
import { persist } from 'zustand/middleware';
import { ToastList } from '../models/models';

const useStore = create<any>(
  persist(
    (set, get) => ({
      nodes: [],
      edges: [],
      toastList: [],
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

      // updateNodeLabel: (newLabel: string, selectedId: string) => {
      //   set({
      //     nodes: get().nodes.map((currentElement: newNode) => {
      //       if (currentElement.id === selectedId) {
      //         return {
      //           ...currentElement,
      //           data: { ...currentElement.data, label: newLabel },
      //         };
      //       }
      //       return currentElement;
      //     }),
      //   });
      // },
      setCustom: (nodes: any, edges: any) => {
        set({
          nodes,
          edges,
        });
      },
      onAddToastMsg: (toastInfo: ToastList) => {
        set({
          toastList: [toastInfo],
        });
      },
      updateProps: (key: string, value: string | boolean | undefined, selectedId: string) => {
        set({
          nodes: get().nodes.map((currentElement: any) => {
            if (currentElement.id === selectedId) {
              currentElement['data'][key] = value;
              return currentElement;
            }
            return currentElement;
          }),
        });
      },
      onDeleteNode: (nodeId: string) => {
        set({
          nodes: get().nodes.filter((currentElement: any) => currentElement.id !== nodeId),
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
