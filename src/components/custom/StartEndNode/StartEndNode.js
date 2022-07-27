import React, { useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import useStore from "../../../store/store";
const handleStyle = { right: 0 };

export default function StartEndNode({ id, data }) {
  const [editOption, setEditOption] = useState(false);
  const [label, setLabel] = useState(data.label);
  const updateNodeLabel = useStore((state) => state.updateNodeLabel);
  const enableEditHandle = () => {
    setEditOption(true);
  };
  const onChangeHandler = (e) => {
    setLabel(e.target.value);
  };

  const onBlurHandle = (e) => {
    setEditOption(false);
    updateNodeLabel(label, id);
  };

  return (
    <div className="node-wrapper start-end-node-wrapper shadow-xl w-[220px]  cursor-pointer ease-in duration-300 border rounded-full border-slate-600 border-solid bg-black text-white p-5">
      <div className="flex flex-col">
        {editOption && <input type="text" className="p-3 text-center text-black" onChange={onChangeHandler} onBlur={onBlurHandle} value={label} />}
        {!editOption && (
          <h2 className="text-sm p-3 text-center" onClick={enableEditHandle}>
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
