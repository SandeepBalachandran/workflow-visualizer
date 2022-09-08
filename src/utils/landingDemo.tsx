const simpleNodes = [
  {
    id: 'EndNode_2',
    type: 'startEndNode',
    position: { x: 677.1675586697746, y: -308.9317532093569 },
    data: { nodeType: 0, label: 'Sleep' },
  },
  {
    id: 'startNode_1',
    type: 'startEndNode',
    position: { x: 125.0533440135851, y: -306.47602218633506 },
    data: { nodeType: 1, label: 'Wake Up' },
  },
  {
    id: 'processNode_1',
    type: 'processNode',
    position: { x: 429.86559429283835, y: -307.77420199668995 },
    data: { label: 'Work hard' },
  },
];
const simpleEdges = [
  { id: 'StartToProcess', source: 'startNode_1', target: 'processNode_1', selected: false },
  {
    source: 'processNode_1',
    sourceHandle: 'processHandle',
    target: 'EndNode_2',
    targetHandle: 'targetEnd1',
    id: 'reactflow__edge-processNode_1processHandle-EndNode_2targetEnd1',
  },
];

export { simpleNodes, simpleEdges };
