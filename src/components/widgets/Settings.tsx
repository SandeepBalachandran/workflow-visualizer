import React from 'react';
import useOutsideClick from '../../helpers/useOutsideClick';
import useStore from '../../store/store';
import { getIcon } from '../../utils/icons';
import ColorPicker from './ColorPicker';

type Props = {
  onSettingsChange: any;
  domreference: any;
  data: {
    label: string;
    backgroundColor?: string;
    color?: string;
    align?: string;
    bold?: boolean;
    italics?: boolean;
  };
  id: string;
};

const Settings = ({ onSettingsChange, domreference, data, id }: Props) => {
  const [showPicker, setPickerState] = React.useState({
    textColorPicker: false,
    backgroundColorPicker: false,
    borderColorPicker: false,
  });

  const textColorPickerRef = React.useRef(null);
  const backgroundColorPickerRef = React.useRef(null);
  const borderColorPickerRef = React.useRef(null);

  useOutsideClick(textColorPickerRef, () => {
    if (showPicker.textColorPicker) {
      setPickerState({ ...showPicker, textColorPicker: false });
    }
  });

  useOutsideClick(backgroundColorPickerRef, () => {
    if (showPicker.backgroundColorPicker) {
      setPickerState({ ...showPicker, backgroundColorPicker: false });
    }
  });

  const onUpdateProps = useStore((state: any) => state.updateProps);
  const onDelete = useStore((state: any) => state.onDeleteNode);

  const toggleProp = (key: string, value: boolean | string) => {
    onSettingsChange(key, value, id);
    onUpdateProps(key, value, id);
  };

  const onDeleteNode = () => {
    onDelete(id);
  };

  return (
    <div
      className="absolute w-[500px] p-6 overflow-auto text-black bg-white rounded shadow-lg -left-28 -top-28 animate-dropdown"
      ref={domreference}
    >
      <div
        className="flex flex-row content-center justify-between gap-3"
        onClick={($event) => $event.stopPropagation()}
      >
        <span
          className={
            'text-2xl text-black  p-1 rounded-sm' +
            (data.bold ? '  bg-slate-200 border-slate-200' : '')
          }
          onClick={() => toggleProp('bold', !data.bold)}
        >
          {getIcon('bold')}
        </span>
        <span
          className={
            'text-2xl text-black  p-1  rounded-sm' +
            (data.italics ? ' bg-slate-200 border-slate-200' : '')
          }
          onClick={() => toggleProp('italics', !data.italics)}
        >
          {getIcon('italic')}
        </span>
        <span
          className={
            'text-2xl text-black  p-1  rounded-sm' +
            (data.align === 'left' ? ' bg-slate-200 border-slate-200' : '')
          }
          onClick={() => toggleProp('align', 'left')}
        >
          {getIcon('alignleft')}
        </span>
        <span
          className={
            'text-2xl text-black  p-1  rounded-sm' +
            (data.align === 'center' ? ' bg-slate-200 border-slate-200' : '')
          }
          onClick={() => toggleProp('align', 'center')}
        >
          {getIcon('aligncenter')}
        </span>
        <span
          className={
            'text-2xl text-black  p-1  rounded-sm' +
            (data.align === 'right' ? ' bg-slate-200 border-slate-200' : '')
          }
          onClick={() => toggleProp('align', 'right')}
        >
          {getIcon('alignright')}
        </span>

        <span
          className="p-1 text-2xl text-black rounded-sm"
          onClick={(e) => {
            setPickerState({ ...showPicker, textColorPicker: !showPicker.textColorPicker });
          }}
        >
          {getIcon('color')}

          {showPicker.textColorPicker && (
            <ColorPicker onColorPick={toggleProp} type="color" domreference={textColorPickerRef} />
          )}
        </span>

        <span
          className="p-1 text-2xl text-black rounded-sm"
          onClick={(e) => {
            setPickerState({
              ...showPicker,
              backgroundColorPicker: !showPicker.backgroundColorPicker,
            });
          }}
        >
          {getIcon('backgroundcolor')}

          {showPicker.backgroundColorPicker && (
            <ColorPicker
              onColorPick={toggleProp}
              type="backgroundColor"
              domreference={backgroundColorPickerRef}
            />
          )}
        </span>

        <span
          className="p-1 text-2xl text-black rounded-sm"
          onClick={(e) => {
            setPickerState({
              ...showPicker,
              borderColorPicker: !showPicker.borderColorPicker,
            });
          }}
        >
          {getIcon('border')}

          {showPicker.borderColorPicker && (
            <ColorPicker
              onColorPick={toggleProp}
              type="borderColor"
              domreference={borderColorPickerRef}
            />
          )}
        </span>

        <span className="p-1 text-2xl text-black" onClick={onDeleteNode}>
          {getIcon('delete')}
        </span>
      </div>
    </div>
  );
};

export default Settings;
