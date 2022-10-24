import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import useComponentVisible from '../../../helpers/checkOutsideclick';
import { findStyle } from '../../../helpers/helper';
import { newNode } from '../../../models/models';
import useStore from '../../../store/store';
import Settings from '../../widgets/Settings';
const handleStyle = { right: 0 };
const position = { top: '-7rem', left: '-3rem' };
export default function ProcessNode(props: any): JSX.Element {
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
  const onUpdateNodeLabel = useStore((state: any) => state.onUpdateProps);
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
      className="relative p-5 border border-solid shadow-xl cursor-pointer node-wrapper process-node-wrapper rounded-xl"
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
      <Handle type="target" position={Position.Left} id="processHandle" style={handleStyle} />
      <Handle type="target" position={Position.Top} id="processHandleTop" style={handleStyle} />
      <div className="flex min-w-[140px]" style={{ justifyContent: findStyle(props.data.align) }}>
        {editOption && (
          <input
            type="text"
            className="w-full p-3 nodrag"
            style={{
              backgroundColor: settings.backgroundColor,
              color: settings.color,
              fontWeight: settings.bold ? 'bolder' : 'normal',
              fontStyle: settings.italics ? 'italic' : 'normal',
              fontSize: settings.fontSize,
            }}
            onChange={onChangeHandler}
            onBlur={onBlurHandle}
            value={settings.label}
            onKeyDown={handleKeyDown}
          />
        )}
        {!editOption && (
          <h2
            className="p-3 text-sm "
            onClick={enableEditHandle}
            style={{ fontSize: settings.fontSize }}
          >
            {settings.label}
          </h2>
        )}
      </div>
      <Handle type="source" position={Position.Right} id="processHandle" style={handleStyle} />
      <Handle
        type="source"
        position={Position.Bottom}
        id="processHandleBottom"
        style={handleStyle}
      />

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
