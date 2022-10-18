import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import useComponentVisible from '../../../helpers/checkOutsideclick';
import { findStyle } from '../../../helpers/helper';
import { newNode } from '../../../models/models';
import useStore from '../../../store/store';
import Settings from '../../widgets/Settings';

const position = { top: '-17rem', left: '-3rem', rotate: '-45deg' };
export default function DecisionNode(props: any): JSX.Element {
  const [editOption, setEditOption] = useState(false);
  const [settings, setSettings] = useState({
    label: props.data.label,
    backgroundColor: props.data.backgroundColor,
    borderColor: props.data.borderColor,
    borderWidth: props.data.borderWidth,
    fontSize: props.data.fontSize,
    color: props.data.color,
    align: props.data.align,
    bold: props.data.bold,
    italics: props.data.italics,
  });
  const onUpdateNodeLabel = useStore((state: any) => state.updateProps);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
  const enableEditHandle = () => {
    setEditOption(true);
  };
  const onChangeHandler: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings((prevState: any) => {
      const value = {
        ...prevState,
        label: event.target.value,
      };
      return value;
    });
  };

  const onBlurHandle: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditOption(false);
    onUpdateNodeLabel('label', settings.label, props.id);
  };

  const handleKeyDown: React.KeyboardEventHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      setEditOption(false);
      onUpdateNodeLabel('label', settings.label, props.id);
    }
  };

  const onNodeClick: React.MouseEventHandler = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const settingsPopupEvent = (key: any, value: any, id: any) => {
    setSettings((prevState: any) => {
      const state = {
        ...prevState,
        [key]: value,
      };
      return state;
    });
  };

  return (
    <div
      className="node-wrapper  shadow-xl rounded-xl  cursor-pointer   border border-solid  p-5 w-[150px] h-[150px] rotate-45 decision-node"
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.color,
        fontWeight: settings.bold ? 'bolder' : 'normal',
        fontStyle: settings.italics ? 'italic' : 'normal',
        borderColor: settings.borderColor,
        borderWidth: settings.borderWidth,
      }}
      onClick={onNodeClick}
    >
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
        <div className="flex" style={{ justifyContent: findStyle(settings.align) }}>
          {editOption && (
            <textarea
              className="w-full p-3 nodrag h-[110px]"
              style={{
                backgroundColor: settings.backgroundColor,
                color: settings.color,
                fontWeight: settings.bold ? 'bolder' : 'normal',
                fontStyle: settings.italics ? 'italic' : 'normal',
                fontSize: settings.fontSize,
              }}
              onChange={onChangeHandler}
              onBlur={onBlurHandle}
              onKeyDown={handleKeyDown}
              value={settings.label}
            />
          )}
          {!editOption && (
            <h2
              className="p-3 text-sm overflow-auto h-[110px]"
              onClick={enableEditHandle}
              style={{ fontSize: settings.fontSize }}
            >
              {settings.label}
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
      {isComponentVisible && (
        <Settings
          position={position}
          onSettingsChange={settingsPopupEvent}
          domreference={ref}
          data={settings}
          id={props.id}
        />
      )}
    </div>
  );
}
