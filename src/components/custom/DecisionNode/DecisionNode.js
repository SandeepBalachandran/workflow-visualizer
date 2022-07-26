import React, { useCallback, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import useStore from "../../../store/store";

export default function DecisionNode({ id, data }) {
  const [editOption, setEditOption] = useState(false);
  const [label, setLabel] = useState(data.label);
  const onUpdateNodeLabel = useStore((state) => state.updateNodeLabel);
  const enableEditHandle = () => {
    setEditOption(true);
  };
  const onChangeHandler = useCallback(
    (e) => {
      setLabel(e.target.value);
    },
    [label]
  );
  const onBlurHandle = useCallback(
    (e) => {
      setEditOption(false);
      onUpdateNodeLabel(label,id)
    },
    [label]
  );
  return (
    <div className="node-wrapper  shadow-xl rounded-xl  cursor-pointer ease-in duration-300 border-slate-600 border border-solid bg-[#ff653b] p-5 w-[150px] h-[150px]  text-[#fff] rotate-45">
      <div className="w-[100px] h-[100px] -rotate-45">
        <Handle type="target" position={Position.Top} style={{ top: -50 }} id="decisionTarget1"></Handle>
        <Handle type="source" position={Position.Left} style={{ left: -55, top: 55 }} id="decisionSource1"></Handle>
        <div className="flex flex-col">
          {editOption && <textarea className="p-3 text-center text-black w-full" onChange={onChangeHandler} onBlur={onBlurHandle} value={label} />}
          {!editOption && (
            <h2 className="text-sm p-3 text-center" onClick={enableEditHandle}>
              {label}
            </h2>
          )}
        </div>
        <Handle type="source" id="decisionSource2" position={Position.Right} style={{ right: -55, top: 55 }} />
        <Handle type="target" id="decisionTarget2" position={Position.Bottom} style={{ bottom: -60 }} />
      </div>
    </div>
  );
}
