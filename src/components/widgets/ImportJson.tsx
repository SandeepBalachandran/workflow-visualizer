import Popup from '../common/popup/Popup';
import React from 'react';
import useStore from '../../store/store';
import { getIcon } from '../../utils/icons';

const ImportJson = ({ closeHander, show, title, onImport }: any) => {
  const { onSetCustomFlow } = useStore();
  const [fileName, setFileName] = React.useState('');
  const [fileContent, setFileContent] = React.useState({ nodes: [], edges: [] });

  const importJsonReference = React.useRef<HTMLInputElement>(null);

  /*
   * clear selected file from the event inside the popup
   */
  const clearFiles = (e: any) => {
    e?.stopPropagation();
    setFileContent({ nodes: [], edges: [] });
    setFileName('');
  };

  /*
   * Set the filecontent once the file is selected
   *
   */
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

  const handleDrop = (e: any) => {};

  const importJson = (event: any) => {
    onSetCustomFlow(fileContent.nodes, fileContent.edges);
    clearFiles(event);
    onImport(fileName);
  };

  return (
    <Popup onClose={closeHander} show={show} title={title}>
      <div className="flex flex-col justify-around w-full gap-6 px-4 py-8 md:px-28 ">
        <div className="relative drop-zone max-w-[400px] h-[300px] p-6 flex flex-col gap-10 items-center justify-center text-center font-bold text-sm  cursor-pointer border-dashed border-4 rounded ">
          <span className="drop-zone__prompt">Drop JSON file here or click to upload</span>
          {Boolean(fileContent.nodes.length) && (
            <span className="relative p-2 border-2 rounded shadow-sm">
              {fileName}
              <div
                className="absolute z-20 p-2 bg-red-600 rounded-full cursor-pointer -top-4 -right-4"
                onClick={clearFiles}
              >
                <span className="text-white">{getIcon('close')}</span>
              </div>
            </span>
          )}
          <input
            type="file"
            name="myFile"
            className="absolute w-full h-full opacity-0 cursor-pointer drop-zone__input"
            onChange={handleJsonImport}
            ref={importJsonReference}
            accept="application/json"
            onDrop={handleDrop}
          />
        </div>
        {Boolean(fileContent.nodes.length) && (
          <div className="flex flex-row justify-center w-full">
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
