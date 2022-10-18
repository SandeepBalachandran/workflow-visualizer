import React, { useState } from 'react';
import { nodeDataProps } from '../../models/models';

type Props = {
  onPropChange: (key: string, color: string) => void;
  type: string;
  domreference: any;
  data: nodeDataProps;
};
const colors = [
  '#ffffff',
  '#ff0000',
  '#dfff00',
  '#19ff00',
  '#8fd14f',
  '#0008ff',
  '#c700ff',
  '#784be8',
  '#000',
  '#808080',
  '#e6e6e6',
];
const ColorPicker = (props: Props) => {
  const [borderWidth, setBorderWidth] = useState(
    props.data.borderWidth?.slice(0, props.data.borderWidth.indexOf('p'))
  );
  const chooseColor = (color: string) => {
    props.onPropChange(props.type, color);
  };

  const chooseBorderWidth = (width: string) => {
    setBorderWidth(width);
    props.onPropChange('borderWidth', width + 'px');
  };
  return (
    <div onClick={($event) => $event.stopPropagation()}>
      <div
        className="fixed flex flex-col w-40 gap-8 p-1 bg-white rounded shadow-lg -top-12"
        ref={props.domreference}
      >
        {props.type === 'borderColor' && (
          <div className="flex flex-col justify-center p-2 slidecontainer">
            <label className="text-[10px] text-slate-400">Border Thickness </label>
            <input
              type="range"
              min="0"
              max="20"
              value={borderWidth}
              className="slider nodrag w-full h-1 rounded bg-[#d3d3d3] opacity-70 hover:opacity-100"
              onChange={(e) => chooseBorderWidth(e.target.value)}
            />
          </div>
        )}
        <div className="flex flex-row flex-wrap justify-center w-full gap-1">
          {colors.map((color, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="w-10 h-10 p-2 border-2 rounded-full border-slate-400"
                  style={{ backgroundColor: color }}
                  onClick={() => chooseColor(color)}
                ></div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-center ">
          <input type="color" className="" onChange={(e) => chooseColor(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
