import React, { useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import useStore from "../../../store/store";
const handleStyle = { right: 0 };

export default function ProcessNode({ id, data }) {
  const [editOption, setEditOption] = useState(false);
  const [label, setLabel] = useState(data.label);
  const onUpdateNodeLabel = useStore((state) => state.updateNodeLabel);
  const enableEditHandle = () => {
    setEditOption(true);
  };
  const onChangeHandler = (e) => {
    setLabel(e.target.value);
  };
  const onBlurHandle = (e) => {
    setEditOption(false);
    onUpdateNodeLabel(label, id);
  };

  return (
    <div className="node-wrapper process-node-wrapper shadow-xl rounded-xl  cursor-pointer ease-in duration-300 border-slate-600 border border-solid bg-[#784be8] text-white p-5">
      <Handle type="target" position={Position.Left} id="processHandle" style={handleStyle} />
      <div className="flex flex-col">
        {editOption && <input type="text" className="p-3 text-center text-black w-full" onChange={onChangeHandler} onBlur={onBlurHandle} value={label} />}
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
