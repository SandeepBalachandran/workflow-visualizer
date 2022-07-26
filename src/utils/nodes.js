export default [
  {
    id: "startNode",
    type: "startEndNode",
    position: { x: -600, y: -100 },
    data: { nodeType: 1, label: "Start" },
  },
  {
    id: "processNode",
    type: "processNode",
    position: { x: -300, y: 100 },
    data: { label: "Prepare balance" },
  },
  {
    id: "processNode2",
    type: "processNode",
    position: { x: -100, y: -100 },
    data: { label: "Place a beaker with 1000ul of distilled H20 on the balance and tare" },
  },
  {
    id: "processNode3",
    type: "processNode",
    position: { x: 700, y: 100 },
    data: { label: "Place a new pipette tip on the pipettor" },
  },
  {
    id: "processNode4",
    type: "processNode",
    position: { x: 1000, y: -100 },
    data: { label: "Weigh the pipettes at 100% volume five times" },
  },
  {
    id: "decisionNode",
    type: "decisionNode",
    position: { x: 1500, y: 300 },
    data: { label: "Weighed the pipettes at 100% volume five times?" },
  },
  {
    id: "processNode5",
    type: "processNode",
    position: { x: 2000, y: 100 },
    data: { label: "Aspirate and dispense 100% of the volume into the beaker" },
  },
  {
    id: "processNode6",
    type: "processNode",
    position: { x: 2600, y: 100 },
    data: { label: "Record the weight in the table " },
  },
  {
    id: "processNode7",
    type: "processNode",
    position: { x: 3000, y: 500 },
    data: { label: "Tare the balance " },
  },
  {
    id: "endNode",
    type: "startEndNode",
    position: { x: 1000, y: 600 },
    data: { nodeType: 0, label: "End" },
  },
];
