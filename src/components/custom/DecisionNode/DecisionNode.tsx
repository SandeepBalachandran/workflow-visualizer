import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import useStore from '../../../store/store';

export default function DecisionNode({
  id,
  data,
}: {
  id: string;
  data: { nodeType: string; label: string };
}) {
  const [editOption, setEditOption] = useState(false);
  const [label, setLabel] = useState(data.label);
  const onUpdateNodeLabel = useStore((state: any) => state.updateNodeLabel);
  const enableEditHandle = () => {
    setEditOption(true);
  };
  const onChangeHandler: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLabel(event.target.value);
  };

  const onBlurHandle: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditOption(false);
    onUpdateNodeLabel(label, id);
  };

  const handleKeyDown: React.ChangeEventHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      setEditOption(false);
      onUpdateNodeLabel(label, id);
    }
  };
  return (
    <div className="node-wrapper  shadow-xl rounded-xl  cursor-pointer ease-in duration-300 border-slate-600 border border-solid bg-[#ff653b] p-5 w-[150px] h-[150px]  text-[#fff] rotate-45">
      <div className="w-[100px] h-[100px] -rotate-45">
        <Handle
          type="target"
          position={Position.Top}
          style={{ top: -50 }}
          id="decisionTarget1"
        ></Handle>
        <Handle
          type="source"
          position={Position.Left}
          style={{ left: -55, top: 55 }}
          id="decisionSource1"
        ></Handle>
        <div className="flex flex-col">
          {editOption && (
            <input
              className="p-3 text-center bg-[#ff653b] w-full"
              onChange={onChangeHandler}
              onBlur={onBlurHandle}
              onKeyDown={handleKeyDown}
              value={label}
            />
          )}
          {!editOption && (
            <h2 className="text-sm p-3 text-center" onClick={enableEditHandle}>
              {label}
            </h2>
          )}
        </div>
        <Handle
          type="source"
          id="decisionSource2"
          position={Position.Right}
          style={{ right: -55, top: 55 }}
        />
        <Handle
          type="target"
          id="decisionTarget2"
          position={Position.Bottom}
          style={{ bottom: -60 }}
        />
      </div>
    </div>
  );
}
