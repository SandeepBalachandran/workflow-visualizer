import Popup from '../common/popup/Popup';
import React from 'react';
import useStore from '../../store/store';
import { getIcon } from '../../utils/icons';

const ImportJson = ({ closeHander, show, title, onImport }: any) => {
  const { setCustom } = useStore();
  const [fileName, setFileName] = React.useState('');
  const [fileContent, setFileContent] = React.useState('');

  const importJsonReference = React.useRef<HTMLInputElement>(null);

  const clearFiles = (e: any) => {
    e?.stopPropagation();
    setFileContent('');
    setFileName('');
    console.log(fileName, fileContent);
  };

  const handleJsonImport = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    setFileName(e.target.files[0].name);
    fileReader.onload = (e: any) => {
      const flow = JSON.parse(e.target.result);
      setFileContent(flow);
    };
    if (importJsonReference.current != undefined) {
      importJsonReference.current.value = '';
    }
  };

  const handleDrop = (e: any) => {
    console.log(e);
  };

  const importJson = (event: any) => {
    setCustom(fileContent);
    clearFiles(event);
    onImport();
  };

  return (
    <Popup onClose={closeHander} show={show} title={title}>
      <div className="px-4 md:px-28 py-8 w-full flex flex-col justify-around gap-6 ">
        <div className="relative drop-zone max-w-[400px] h-[300px] p-6 flex flex-col gap-10 items-center justify-center text-center font-bold text-sm  cursor-pointer border-dashed border-4 rounded ">
          <span className="drop-zone__prompt">Drop JSON file here or click to upload</span>
          {fileContent && (
            <span className="p-2 border-2 rounded shadow-sm relative">
              {fileName}
              <div
                className=" bg-red-600 -top-4 -right-4 absolute cursor-pointer z-20 p-2 rounded-full"
                onClick={clearFiles}
              >
                <span className="text-white">{getIcon('close')}</span>
              </div>
            </span>
          )}
          <input
            type="file"
            name="myFile"
            className="drop-zone__input opacity-0 absolute w-full h-full cursor-pointer"
            onChange={handleJsonImport}
            ref={importJsonReference}
            accept="application/json"
            onDrop={handleDrop}
          />
        </div>
        {fileContent && (
          <div className="w-full flex flex-row justify-center">
            <div
              className="rounded px-5 p-3  bg-[#155bd5] text-white text-center font-bold hover:cursor-pointer"
              onClick={importJson}
            >
              Do it
            </div>
          </div>
        )}
      </div>
    </Popup>
  );
};

export default ImportJson;
