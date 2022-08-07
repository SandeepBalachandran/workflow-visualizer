import React from "react";
import ReactFlow, { ReactFlowProvider, MiniMap, Controls, Background, useReactFlow } from "react-flow-renderer";
import DecisionNode from "./custom/DecisionNode/DecisionNode";
import StartEndNode from "./custom/StartEndNode/StartEndNode";
import ProcessNode from "./custom/ProcessNode/ProcessNode";
import SideMenu from "./common/sideMenu/SideMenu";
import useStore from "../store/store";
import { addNewNode, nodeColor, nodeStrokeColor, edgeOptions, flowstyle } from "../helpers/helper";

let startNodeId = 1;
let processNodeId = 7;
let decisionNodeId = 1;
let endNodeId = 1;

const nodeTypes = { startEndNode: StartEndNode, processNode: ProcessNode, decisionNode: DecisionNode };
function Home() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();
  const reactFlowInstance = useReactFlow();
  const addDecisionNode = () => {
    const id = `DecisionNode_${++decisionNodeId}`;
    const label = `Decision Node`;
    const type = "decisionNode";
    const nodeType = "decisionNode";
    const newNode = addNewNode({ label, type, nodeType, id });
    reactFlowInstance.addNodes(newNode);
  };

  const addStartEndNode = (nodeType) => {
    const id = nodeType ? `StartNode_${++startNodeId}` : `EndNode_${++endNodeId}`;
    const label = nodeType ? "Start Node" : `End Node`;
    const type = "startEndNode";
    const newNode = addNewNode({ label, type, nodeType, id });
    reactFlowInstance.addNodes(newNode);
  };

  const addProcessNode = () => {
    const id = `ProcessNode_${++processNodeId}`;
    const label = "Process Node";
    const type = "processNode";
    const nodeType = "";
    const newNode = addNewNode({ label, type, nodeType, id });
    reactFlowInstance.addNodes(newNode);
  };

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={flowstyle}
        defaultEdgeOptions={edgeOptions
        }>

        <MiniMap
          nodeColor={nodeColor}
          nodeStrokeColor={nodeStrokeColor}
          nodeStrokeWidth={3} />
        <Controls />
        <Background color="#ecf0f3" />
      </ReactFlow>
      <SideMenu
        onAddStartNode={(type) => addStartEndNode(type)}
        onAddDecisionNode={addDecisionNode}
        onAddProcessNode={addProcessNode}
        onAddEndNode={(type) => addStartEndNode(type)} />
    </>
  );
}

export default function HomeContainer() {
  return (
    <>
      <ReactFlowProvider>
        <Home />
      </ReactFlowProvider>
    </>
  );
}
