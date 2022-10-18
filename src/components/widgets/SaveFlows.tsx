import React from 'react';
import useStore from '../../store/store';
import Popup from '../common/popup/Popup';

const SaveFlows = ({ closeHander, show, title, onSave }: any) => {
  const [workflowName, setWorkflowname] = React.useState('');
  const { nodes, edges } = useStore();

  const save = () => {
    if (nodes) {
      setWorkflowname('');
      const currentFlowState = { nodes, edges };
      const savedFlows = JSON.parse(localStorage.getItem('savedFlows')!);
      if (savedFlows) {
        savedFlows[workflowName] = currentFlowState;
        localStorage.setItem('savedFlows', JSON.stringify(savedFlows));
      } else {
        const newVal: any = {};
        newVal[workflowName] = currentFlowState;
        localStorage.setItem('savedFlows', JSON.stringify(newVal));
      }
      onSave(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      workflowName && save();
    }
  };

  const close = () => {
    setWorkflowname('');
    closeHander();
  };
  return (
    <Popup onClose={close} show={show} title={title}>
      <div className="flex flex-col justify-center w-full gap-8">
        <div className="flex flex-col gap-2">
          <label>Name of the workflow</label>
          <input
            type="text"
            className="p-2 border-2 rounded border-slate-200"
            value={workflowName}
            onChange={(e) => setWorkflowname(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {workflowName && (
          <div
            className="rounded px-5 p-3  bg-[#155bd5] text-white text-center font-bold hover:cursor-pointer"
            onClick={save}
          >
            Save
          </div>
        )}
      </div>
    </Popup>
  );
};

export default SaveFlows;
