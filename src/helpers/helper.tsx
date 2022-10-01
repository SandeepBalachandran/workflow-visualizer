import { DefaultEdgeOptions, MarkerType, Node } from 'reactflow';
import { newNode } from '../models/models';

const addNewNode = ({
  label,
  type,
  nodeType,
  id,
}: {
  label: string;
  type: string;
  nodeType: string;
  id: string;
}): newNode => {
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
  return newNode;
};

export interface miniMapColors {
  startEndNode: string;
  processNode: string;
  decisionNode: string;
  default: string;
}

const nodeColor = (node: Node): any => {
  const nodeColor: any = {
    startEndNode: '#000',
    processNode: '#784be8',
    decisionNode: '#ff653b',
    default: '#eee',
  };
  return nodeColor[node.type!];
};

const nodeStrokeColor = (node: Node): any => {
  const nodeColor: any = {
    startEndNode: '#000',
    processNode: '#784be8',
    decisionNode: '#ff653b',
    default: '#eee',
  };
  return nodeColor[node.type!];
};

const edgeOptions: DefaultEdgeOptions = {
  animated: false,
  style: {
    stroke: 'white',
    strokeWidth: 5,
  },
  markerEnd: { type: MarkerType.ArrowClosed, color: 'black' },
  className: 'customArrow',
  type: 'smoothstep',
};

const flowstyle = {
  backgroundColor: '#0078d47a',
};

const isInProgress = () => {
  const item = JSON.parse(localStorage.getItem('flow-storage')!);
  return !!item;
};

const downloadFile = ({ data, fileName, fileType }: any) => {
  const blob = new Blob([data], { type: fileType });
  const a = document.createElement('a');
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export {
  addNewNode,
  nodeColor,
  nodeStrokeColor,
  edgeOptions,
  flowstyle,
  isInProgress,
  downloadFile,
};
