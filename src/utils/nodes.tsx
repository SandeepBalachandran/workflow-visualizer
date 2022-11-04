import { Node } from 'reactflow';

const initialNodes = [
  {
    id: 'startNode_1',
    type: 'startEndNode',
    position: { x: -600, y: -100 },
    data: {
      nodeType: 1,
      label: 'Start',
      backgroundColor: '#000',
      borderColor: '#f80000',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'processNode_1',
    type: 'processNode',
    position: { x: -300, y: 100 },
    data: {
      label: 'Prepare balance',
      backgroundColor: '#784be8',
      borderColor: '#3fddf',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'processNode_2',
    type: 'processNode',
    position: { x: -100, y: -100 },
    data: {
      label: 'Place a beaker with 1000ul of distilled H20 on the balance and tare',
      backgroundColor: '#784be8',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'processNode_3',
    type: 'processNode',
    position: { x: 700, y: 100 },
    data: {
      label: 'Place a new pipette tip on the pipettor',
      backgroundColor: '#784be8',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'processNode_4',
    type: 'processNode',
    position: { x: 1000, y: -100 },
    data: {
      label: 'Weigh the pipettes at 100% volume five times',
      backgroundColor: '#784be8',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'decisionNode_1',
    type: 'decisionNode',
    position: { x: 1500, y: 300 },
    data: {
      label: 'Weighed the pipettes at 100% volume five times?',
      backgroundColor: '#ff653b',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
    },
  },
  {
    id: 'processNode_5',
    type: 'processNode',
    position: { x: 2000, y: 100 },
    data: {
      label: 'Aspirate and dispense 100% of the volume into the beaker',
      backgroundColor: '#784be8',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'processNode_6',
    type: 'processNode',
    position: { x: 2600, y: 100 },
    data: {
      label: 'Record the weight in the table ',
      backgroundColor: '#784be8',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'processNode_7',
    type: 'processNode',
    position: { x: 3000, y: 500 },
    data: {
      label: 'Tare the balance ',
      backgroundColor: '#784be8',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
  {
    id: 'endNode_1',
    type: 'startEndNode',
    position: { x: 1000, y: 600 },
    data: {
      nodeType: 0,
      label: 'End',
      backgroundColor: '#000',
      borderColor: 'rgb(71 85 105 / 1)',
      borderWidth: '1px',
      fontSize: '14px',
      color: '#fff',
      align: 'center',
      bold: false,
      italics: false,
      minWidth: 'fit-content',
      minHeight: 'fit-content',
    },
  },
] as Node[];

export default initialNodes;
