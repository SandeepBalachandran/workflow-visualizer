import React from 'react';
import { getIcon } from '../../../utils/icons';

type popupProps = {
  title: string;
  show: boolean;
  onClose: (value: boolean) => boolean;
  children: React.ReactNode;
};
const Popup = ({ title, show, onClose, children }: popupProps) => {
  const [visible, setVisibility] = React.useState(false);
  const closeHandler = () => {
    setVisibility(!visible);
    onClose(false);
  };

  React.useEffect(() => {
    setVisibility(show);
  }, [show]);
  return (
    <>
      {visible && (
        <>
          <div className="flex align-middle justify-center h-screen w-full fixed left-0 top-0  bg-black/40 z-50">
            <div className="max-w-[70%] w-auto h-auto bg-white my-auto relative shadow-xl rounded-xl border-slate-600 border animate-[zoomIn_0.5s_ease-in-out] text-black ">
              <div className="border-b-2 m-6">
                <h1 className="p-2 text-3xl font-bold">{title}</h1>
              </div>
              <div className="m-6">{children}</div>
              <div
                className=" bg-black -top-4 -right-4 absolute cursor-pointer z-20 p-3 rounded-full text-white"
                onClick={closeHandler}
              >
                {getIcon('close')}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
