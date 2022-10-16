import { NextPage } from 'next';
import React from 'react';
import useStore from '../store/store';
import { downloadFile } from '../helpers/helper';
import Tooltip from './common/tooltip/Tooltip';
import Templates from './widgets/Templates';
import ImportJson from './widgets/ImportJson';
import SaveFlows from './widgets/SaveFlows';
import { getIcon } from '../utils/icons';
import { dropdownItems } from '../models/models';
import MenuDropdown from './widgets/MenuDropdown';
import SavedFlowsList from './widgets/SavedFlowsList';

const Toolbar: NextPage = () => {
  const { nodes, edges, deleteAll, onAddToastMsg } = useStore();
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

  // const toggleSavePopup = () => {
  //   if (nodes.length) {
  //     setSavePopupVisibility(!savePopupVisibility);
  //   } else {
  //     alert('Add nodes to save');
  //   }
  // };

  const afterSaved = () => {
    toggle('toggleSavePopup');
    onAddToastMsg({
      title: 'Yup',
      description: 'Workflow Saved successfully',
      type: 'success',
    });
  };

  const afterImported = () => {
    toggle('toggleImportPopup');
    onAddToastMsg({
      title: 'Hooray!',
      description: 'Workflow Imported successfully',
      type: 'success',
    });
  };

  const dropdownItems: dropdownItems[] = [
    {
      id: 1,
      name: 'Themes',
      method: null,
    },
  ];
  const [state, setState] = React.useState({
    toggleLeftBar: false,
    toggleRightBar: true,
    toggleTemplatePopup: false,
    toggleImportPopup: false,
    toggleSavePopup: false,
  });

  const toggle = (prop: any) => {
    setState((prevState: any) => {
      const value = {
        ...prevState,
        [prop]: !prevState[prop],
      };
      return value;
    });
  };

  const print = () => {};

  const random: number = Math.random() * 3 + 1;

  return (
    <>
      <div className="fixed top-0 z-50 flex flex-row justify-between w-full">
        <div
          className={
            'flex flex-row justify-start m-3 bg-white items-center  duration-1000 shadow-lg rounded ' +
            (!state.toggleLeftBar ? 'w-max' : 'w-[10%]')
          }
        >
          <div className="relative flex flex-row justify-start p-3 rounded ">
            <div className="flex flex-row justify-between px-4 border-r-2">
              <div>
                <span className="font-bold ">WV</span>
              </div>
              <div className="mx-2">
                <span className="px-3 py-1 text-xs font-bold text-black rounded-full bg-slate-300">
                  Free
                </span>
              </div>
            </div>
            <div className="absolute top-0 flex flex-col justify-between bg-white md:flex-row -right-14 md:static ">
              <Tooltip content="Add New" direction="bottom">
                <div
                  className="relative px-4 py-3 duration-100 ease-in cursor-pointer md:py-0 hover:scale-125"
                  onClick={createNew}
                >
                  {getIcon('plus')}
                </div>
              </Tooltip>

              <Tooltip content="Save" direction="bottom">
                <div
                  className="relative px-4 py-3 duration-100 ease-in cursor-pointer md:py-0 hover:scale-125"
                  onClick={() => toggle('toggleSavePopup')}
                >
                  <span className=""> {getIcon('save')}</span>
                </div>
              </Tooltip>

              <Tooltip content="Templates" direction="bottom">
                <div
                  className="relative px-4 py-3 duration-100 ease-in cursor-pointer md:py-0 hover:scale-125"
                  onClick={() => toggle('toggleTemplatePopup')}
                >
                  {getIcon('templates')}
                </div>
              </Tooltip>

              <Tooltip content="Print" direction="bottom">
                <div
                  className="relative px-4 py-3 duration-100 ease-in cursor-pointer md:py-0 hover:scale-125"
                  onClick={print}
                >
                  <span className="text-[#ccc]"> {getIcon('print')}</span>
                </div>
              </Tooltip>

              <Tooltip content="Import" direction="bottom">
                <div
                  className="relative px-4 py-3 duration-100 ease-in cursor-pointer md:py-0 hover:scale-125"
                  onClick={() => toggle('toggleImportPopup')}
                >
                  <span className=""> {getIcon('import')}</span>
                </div>
              </Tooltip>

              <Tooltip content="Export" direction="bottom">
                <div
                  className="relative px-4 py-3 duration-100 ease-in cursor-pointer md:py-0 hover:scale-125"
                  onClick={exportJson}
                >
                  <span className=""> {getIcon('export')}</span>
                </div>
              </Tooltip>
              <Tooltip content="Settings" direction="bottom">
                <MenuDropdown
                  menuLabel={<span className="text-[#ccc] "> {getIcon('settings')}</span>}
                  items={dropdownItems}
                  key={random}
                />
              </Tooltip>
            </div>
          </div>
          {/* // Todo : toggle implementation */}
          {/* <div className="px-3">
            {state.toggleLeftBar ? (
              <span
                className="duration-100 ease-in cursor-pointer hover:scale-150"
                onClick={() => toggle('toggleLeftBar')}
              >
                {getIcon('rightarrow')}
              </span>
            ) : (
              <span
                className="duration-100 ease-in cursor-pointer hover:scale-150"
                onClick={() => toggle('toggleLeftBar')}
              >
                {getIcon('leftarrow')}
              </span>
            )}
          </div> */}
        </div>
        <div className="flex flex-row items-center justify-start m-3 duration-1000 bg-white rounded shadow-lg">
          {/* <div className="relative flex flex-row justify-start p-3 rounded ">
            <h1>Name</h1>
          </div> */}
        </div>

        <div
          className={
            'bg-white p-3 m-3 flex flex-row  justify-start rounded shadow-lg  items-center duration-1000	' +
            (!state.toggleRightBar ? 'w-[30%]' : 'w-[5%]')
          }
        >
          {state.toggleRightBar ? (
            <span
              className="duration-100 ease-in cursor-pointer hover:scale-150"
              onClick={() => toggle('toggleRightBar')}
            >
              {getIcon('leftarrow')}
            </span>
          ) : (
            <span
              className="duration-100 ease-in cursor-pointer hover:scale-150"
              onClick={() => toggle('toggleRightBar')}
            >
              {getIcon('rightarrow')}
            </span>
          )}

          <Tooltip content="Saved Workflows" direction="bottom">
            <SavedFlowsList
              menuLabel={<span className=""> {getIcon('folder')}</span>}
              key={random}
            />
          </Tooltip>
        </div>
      </div>

      <Templates
        closeHandler={() => toggle('toggleTemplatePopup')}
        show={state.toggleTemplatePopup}
        title="All Templates"
        onChoose={() => toggle('toggleTemplatePopup')}
      />

      <ImportJson
        closeHander={() => toggle('toggleImportPopup')}
        show={state.toggleImportPopup}
        title="Import Json"
        onImport={afterImported}
      />

      <SaveFlows
        closeHander={() => toggle('toggleSavePopup')}
        show={state.toggleSavePopup}
        title="Save Workflow"
        onSave={afterSaved}
      />
    </>
  );
};

export default Toolbar;
