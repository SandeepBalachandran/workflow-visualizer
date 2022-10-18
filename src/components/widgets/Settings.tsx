import React from 'react';
import useOutsideClick from '../../helpers/useOutsideClick';
import { nodeDataProps } from '../../models/models';
import useStore from '../../store/store';
import { getIcon } from '../../utils/icons';
import ColorPicker from './ColorPicker';

type Props = {
  onSettingsChange: any;
  domreference: any;
  position: {
    top: string;
    left: string;
    rotate?: string;
  };
  data: nodeDataProps;
  id: string;
};

const Settings = ({ onSettingsChange, domreference, data, id, position }: Props) => {
  const [showPicker, setPickerState] = React.useState({
    textColorPicker: false,
    backgroundColorPicker: false,
    borderColorPicker: false,
  });

  const [value, setValue] = React.useState({
    fontSize: data.fontSize,
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

  useOutsideClick(borderColorPickerRef, () => {
    if (showPicker.borderColorPicker) {
      setPickerState({ ...showPicker, borderColorPicker: false });
    }
  });
  const onUpdateProps = useStore((state: any) => state.updateProps);
  const onDelete = useStore((state: any) => state.onDeleteNode);

  const toggleProp = (key: string, value: boolean | string) => {
    onSettingsChange(key, value, id); // state change. Lifing state
    onUpdateProps(key, value, id); // store change. Global save
  };

  const onValueChange = (e: any) => {
    setValue({ ...value, fontSize: e.target.value });
    toggleProp('fontSize', value.fontSize!);
  };

  const onDeleteNode = () => {
    onDelete(id);
  };

  return (
    <div
      className="overflow-visible absolute w-[500px] p-6  text-black bg-white rounded shadow-lg  animate-dropdown z-50"
      ref={domreference}
      onClick={($event) => $event.stopPropagation()}
      style={{
        top: position.top,
        left: position.left,
        rotate: position.rotate ? position.rotate : '',
      }}
    >
      <div className="flex flex-row content-center justify-between gap-3">
        {/* <span className="p-1 text-2xl text-black rounded-sm">
          <input type="number" value={+value.fontSize!} onChange={onValueChange} className="w-14 nodrag text-[10px]"/>
        </span> */}
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
            <ColorPicker
              data={data}
              onPropChange={toggleProp}
              type="color"
              domreference={textColorPickerRef}
            />
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
              data={data}
              onPropChange={toggleProp}
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
              data={data}
              onPropChange={toggleProp}
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
