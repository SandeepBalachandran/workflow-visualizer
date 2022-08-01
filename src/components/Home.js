import React, {  useMemo } from "react";
import ReactFlow, { ReactFlowProvider, MiniMap, Controls, Background, useReactFlow } from "react-flow-renderer";
import DecisionNode from "./custom/DecisionNode/DecisionNode";
import StartEndNode from "./custom/StartEndNode/StartEndNode";
import ProcessNode from "./custom/ProcessNode/ProcessNode";
import SideMenu from "./common/sideMenu/SideMenu";
import useStore from "../store/store";
import { addNewNode, nodeColor, nodeStrokeColor } from "../helpers/helper";

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
let startNodeId = 1;
let processNodeId = 7;
let decisionNodeId = 1;
let endNodeId = 1;

function Home() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();
  const nodeTypes = useMemo(() => ({ startEndNode: StartEndNode, processNode: ProcessNode, decisionNode: DecisionNode }), []);
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
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} fitView style={flowstyle} defaultEdgeOptions={edgeOptions}>
        <MiniMap nodeColor={nodeColor} nodeStrokeColor={nodeStrokeColor} nodeStrokeWidth={3} />
        <Controls />
        <Background color="#ecf0f3" />
      </ReactFlow>
      <SideMenu onAddStartNode={(type) => addStartEndNode(type)} onAddDecisionNode={addDecisionNode} onAddProcessNode={addProcessNode} onAddEndNode={(type) => addStartEndNode(type)} />
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
