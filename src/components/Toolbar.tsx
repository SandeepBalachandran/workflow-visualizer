import { NextPage } from 'next';
import React from 'react';
import useStore from '../store/store';
import Dropdown from './common/dropdown/Dropdown';
import { downloadFile } from '../helpers/helper';
import Tooltip from './common/tooltip/Tooltip';
import Templates from './widgets/Templates';
import ImportJson from './widgets/ImportJson';
import SaveFlows from './widgets/SaveFlows';
import { getIcon } from '../utils/icons';
// import SavedFlowsList from './widgets/savedFlowsList';
import MenuDropdown from './widgets/MenuDropdown';

interface dropdownItems {
  id: Number;
  name: string;
  method: any;
}

const Toolbar: NextPage = () => {
  const { nodes, edges, deleteAll } = useStore();
  const createNew = () => {
    deleteAll();
  };

  const exportJson = () => {
    downloadFile({
      data: JSON.stringify({ nodes, edges }),
      fileName: 'flow.json',
      fileType: 'text/json',
    });
  };

  const toggleTemplatesPopup = () => {
    setTemplatesPopupVisibility(!templatesPopupVisibility);
  };

  const toggleImportPopup = () => {
    setImportPopupVisibility(!importPopupVisibility);
  };

  const toggleSavePopup = () => {
    setSavePopupVisibility(!savePopupVisibility);
  };

  const dropdownItems: dropdownItems[] = [
    {
      id: 1,
      name: 'Create New',
      method: createNew,
    },
    {
      id: 2,
      name: 'Templates',
      method: toggleTemplatesPopup,
    },
  ];

  const [toggle, setToggle] = React.useState(true);
  const [templatesPopupVisibility, setTemplatesPopupVisibility] = React.useState(false);
  const [importPopupVisibility, setImportPopupVisibility] = React.useState(false);
  const [savePopupVisibility, setSavePopupVisibility] = React.useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const templatesPopupCloseHandler = (e: boolean) => {
    setTemplatesPopupVisibility(e);
  };

  const onChooseAnyTemplate = () => {
    setTemplatesPopupVisibility(false);
  };

  const savePopupCloseHandler = (e: boolean) => {
    setSavePopupVisibility(e);
  };

  const onSaveWorkflow = () => {
    setSavePopupVisibility(false);
  };

  const importPopupCloseHandler = (e: boolean) => {
    setImportPopupVisibility(e);
  };

  const importJson = () => {
    importPopupCloseHandler(false);
  };
  const print = () => {};

  return (
    <>
      <div className="w-full flex flex-row justify-between fixed top-0 z-50">
        <div className="w-max bg-white p-3 m-3 flex flex-row justify-start rounded shadow-lg">
          <div className="px-4 border-r-2 flex flex-row justify-between">
            <div>
              <span className="font-bold ">WV</span>
            </div>
            <div className="mx-2">
              <span className="px-3 py-1 bg-slate-300 rounded-full text-xs text-black font-bold">
                Free
              </span>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row justify-between ">
            <Tooltip content="Add New" direction="bottom">
              <div className="pt-1 px-4  cursor-pointer relative" onClick={createNew}>
                {getIcon('plus')}
              </div>
            </Tooltip>
            <Tooltip content="Templates" direction="bottom">
              <div className="pt-1 px-4  cursor-pointer relative" onClick={toggleTemplatesPopup}>
                {getIcon('templates')}
              </div>
            </Tooltip>

            <Tooltip content="Print" direction="bottom">
              <div className="pt-1 px-4  cursor-pointer relative" onClick={print}>
                <span className="text-[#ccc]"> {getIcon('print')}</span>
              </div>
            </Tooltip>

            <Tooltip content="Save" direction="bottom">
              <div className="pt-1 px-4  cursor-pointer relative" onClick={toggleSavePopup}>
                <span className=""> {getIcon('save')}</span>
              </div>
            </Tooltip>

            <Tooltip content="Import" direction="bottom">
              <div className="pt-1 px-4  cursor-pointer relative" onClick={toggleImportPopup}>
                <span className=""> {getIcon('import')}</span>
              </div>
            </Tooltip>

            <Tooltip content="Export" direction="bottom">
              <div className="pt-1 px-4  cursor-pointer relative" onClick={exportJson}>
                <span className=""> {getIcon('export')}</span>
              </div>
            </Tooltip>
            <Tooltip content="Settings" direction="bottom">
              {/* <Dropdown> */}
              {/* <span className=""> {getIcon('settings')}</span> */}
              <MenuDropdown
                menuLabel={<span className="text-[#ccc]"> {getIcon('settings')}</span>}
                items={dropdownItems}
              />
              {/* </Dropdown> */}
            </Tooltip>
          </div>
        </div>
        <div
          className={
            'bg-white p-3 m-3 rounded shadow-lg flex flex-row justify-start items-center duration-500	' +
            (toggle ? 'w-[30%]' : 'w-[5%]')
          }
        >
          {toggle ? (
            <span className="cursor-pointer" onClick={toggleHandler}>
              {getIcon('rightarrow')}
            </span>
          ) : (
            <span className="cursor-pointer" onClick={toggleHandler}>
              {getIcon('leftarrow')}
            </span>
          )}

          {/* <Tooltip content="Saved Workflows" direction="bottom">
            <SavedFlowsList menuLabel={<span className="text-[#ccc]"> {getIcon('folder')}</span>} />
          </Tooltip> */}
        </div>
      </div>

      <Templates
        closeHandler={templatesPopupCloseHandler}
        show={templatesPopupVisibility}
        title="All Templates"
        onChoose={onChooseAnyTemplate}
      />

      <ImportJson
        closeHander={importPopupCloseHandler}
        show={importPopupVisibility}
        title="Import Json"
        onImport={importJson}
      />

      <SaveFlows
        closeHander={savePopupCloseHandler}
        show={savePopupVisibility}
        title="Save Workflow"
        onSave={onSaveWorkflow}
      />
    </>
  );
};

export default Toolbar;
