import React from 'react';

type Props = {
  onColorPick: (key: string, color: string) => void;
  type: string;
  domreference: any;
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
  const chooseColor = (color: string) => {
    props.onColorPick(props.type, color);
  };
  return (
    <div onClick={($event) => $event.stopPropagation()}>
      <div
        className="fixed z-50 w-20 p-1 bg-white rounded shadow-lg -top-12"
        ref={props.domreference}
      >
        <div className="flex flex-row flex-wrap justify-center w-full gap-1">
          {colors.map((color, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="w-2 h-2 p-2 border-2 rounded-full border-slate-400"
                  style={{ backgroundColor: color }}
                  onClick={() => chooseColor(color)}
                ></div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex justify-center mt-2">
          <input type="color" className="" onChange={(e) => chooseColor(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
