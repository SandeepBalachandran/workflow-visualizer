import React from 'react';
import useStore from '../store/store';
import { simpleEdges, simpleNodes } from '../utils/landingDemo';
import ReactFlow, { DefaultEdgeOptions, MarkerType, ReactFlowProvider } from 'reactflow';
// import { edgeOptions, flowstyle } from '../helpers/helper';
import StartEndNode from './custom/StartEndNode/StartEndNode';
import ProcessNode from './custom/ProcessNode/ProcessNode';
import DecisionNode from './custom/DecisionNode/DecisionNode';
type Props = {};
// Todo : Demo workflow for the landing page
const Demo = (props: Props) => {
  const nodeTypes = {
    startEndNode: StartEndNode,
    processNode: ProcessNode,
    decisionNode: DecisionNode,
  };

  const edgeOptions: DefaultEdgeOptions = {
    animated: false,
    style: {
      stroke: '#155bd5',
      strokeWidth: 5,
    },
    markerEnd: { type: MarkerType.ArrowClosed, color: 'black' },
    className: 'customArrow',
    type: 'step',
  };

  return (
    <>
      <div className="w-full h-full App rounded-xl ">
        <ReactFlow
          nodes={simpleNodes}
          edges={simpleEdges}
          nodeTypes={nodeTypes}
          minZoom={0.5}
          maxZoom={0.5}
          fitView
          style={{ backgroundColor: '#fff' }}
          defaultEdgeOptions={edgeOptions}
        ></ReactFlow>
      </div>
    </>
  );
};

export default function DemoContainer() {
  return (
    <>
      <ReactFlowProvider>
        <Demo />
      </ReactFlowProvider>
    </>
  );
}
