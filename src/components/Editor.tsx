import React from 'react';
import ReactFlow, {
  ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  useReactFlow,
} from 'reactflow';
import DecisionNode from './custom/DecisionNode/DecisionNode';
import StartEndNode from './custom/StartEndNode/StartEndNode';
import ProcessNode from './custom/ProcessNode/ProcessNode';
import SideMenu from './common/sideMenu/SideMenu';
import useStore from '../store/store';
import { addNewNode, nodeColor, nodeStrokeColor, edgeOptions, flowstyle } from '../helpers/helper';

let startNodeId = 1;
let processNodeId = 7;
let decisionNodeId = 1;
let endNodeId = 1;

const nodeTypes = {
  startEndNode: StartEndNode,
  processNode: ProcessNode,
  decisionNode: DecisionNode,
};
function Editor() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();
  const reactFlowInstance = useReactFlow();
  const addDecisionNode = () => {
    const decisionNodeBody = {
      label: `Decision Node`,
      type: 'decisionNode',
      nodeType: 'decisionNode',
      id: `DecisionNode_${++decisionNodeId}`,
      backgroundColor: '#ff653b',
      borderColor: '#475569',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
    };
    const newNode = addNewNode(decisionNodeBody);
    reactFlowInstance.addNodes(newNode);
  };

  const addStartEndNode = (nodeType: string) => {
    const startEndNodebody = {
      label: nodeType ? 'Start Node' : `End Node`,
      type: 'startEndNode',
      nodeType,
      id: nodeType ? `StartNode_${++startNodeId}` : `EndNode_${++endNodeId}`,
      backgroundColor: '#000',
      borderColor: '#475569',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    };

    const newNode = addNewNode(startEndNodebody);
    reactFlowInstance.addNodes(newNode);
  };

  const addProcessNode = () => {
    const processNodeBody = {
      label: 'Process Node',
      type: 'processNode',
      nodeType: '',
      id: `ProcessNode_${++processNodeId}`,
      backgroundColor: '#784be8',
      borderColor: '#475569',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    };
    const newNode = addNewNode(processNodeBody);
    reactFlowInstance.addNodes(newNode);
  };
  return (
    <>
      <div className="App h-[100vh] w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={flowstyle}
          defaultEdgeOptions={edgeOptions}
        >
          <MiniMap
            nodeColor={nodeColor}
            nodeStrokeColor={nodeStrokeColor}
            nodeStrokeWidth={3}
            className="bg-white rounded shadow-lg"
            zoomable
            pannable
          />
          {/* <Controls className="!shadow-lg !rounded bg-white !left-3" /> */}
          <Background color="#ecf0f3" />
        </ReactFlow>
        <SideMenu
          onAddStartNode={(type: string) => addStartEndNode(type)}
          onAddDecisionNode={addDecisionNode}
          onAddProcessNode={addProcessNode}
          onAddEndNode={(type: string) => addStartEndNode(type)}
        />
      </div>
    </>
  );
}

export default function EditorContainer() {
  return (
    <>
      <ReactFlowProvider>
        <Editor />
      </ReactFlowProvider>
    </>
  );
}
