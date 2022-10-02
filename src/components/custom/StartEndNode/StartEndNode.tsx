import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import useStore from '../../../store/store';
const handleStyle = { right: 0 };

export default function StartEndNode({
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

  const handleKeyDown: React.KeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      setEditOption(false);
      onUpdateNodeLabel(label, id);
    }
  };

  return (
    <div className="node-wrapper start-end-node-wrapper shadow-xl w-[220px]  cursor-pointer ease-in duration-300 border rounded-full border-slate-600 border-solid bg-black text-white p-5">
      <div className="flex flex-col">
        {editOption && (
          <input
            type="text"
            className="p-3 text-center bg-black nodrag"
            onChange={onChangeHandler}
            onBlur={onBlurHandle}
            onKeyDown={handleKeyDown}
            value={label}
          />
        )}
        {!editOption && (
          <h2 className="p-3 text-sm text-center" onClick={enableEditHandle}>
            {label}
          </h2>
        )}
      </div>

      {Boolean(!data.nodeType) && (
        <>
          <Handle type="target" position={Position.Left} id="targetEnd1" style={handleStyle} />
          <Handle type="target" position={Position.Top} id="targetEnd2" style={handleStyle} />
          <Handle type="target" position={Position.Bottom} id="targetEnd3" style={handleStyle} />
        </>
      )}

      {Boolean(data.nodeType) && (
        <>
          <Handle type="source" position={Position.Right} id="sourceStart1" style={handleStyle} />
          <Handle type="source" position={Position.Top} id="sourceStart2" style={handleStyle} />
          <Handle type="source" position={Position.Bottom} id="sourceStart3" style={handleStyle} />
        </>
      )}
    </div>
  );
}
