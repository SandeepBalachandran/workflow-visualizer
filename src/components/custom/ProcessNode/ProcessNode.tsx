import React, { useState } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import useStore from '../../../store/store';
const handleStyle = { right: 0 };

export default function ProcessNode({
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
    <div className="node-wrapper process-node-wrapper shadow-xl rounded-xl  cursor-pointer ease-in duration-300 border-slate-600 border border-solid bg-[#784be8] text-white p-5">
      <Handle type="target" position={Position.Left} id="processHandle" style={handleStyle} />
      <div className="flex flex-col">
        {editOption && (
          <input
            type="text"
            className="p-3 text-center bg-[#784be8] w-full"
            onChange={onChangeHandler}
            onBlur={onBlurHandle}
            value={label}
            onKeyDown={handleKeyDown}
          />
        )}
        {!editOption && (
          <h2 className="text-sm p-3 text-center" onClick={enableEditHandle}>
            {label}
          </h2>
        )}
      </div>
      <Handle type="source" position={Position.Right} id="processHandle" style={handleStyle} />
    </div>
  );
}
