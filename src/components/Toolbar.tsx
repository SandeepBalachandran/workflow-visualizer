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

  // const toggleSavePopup = () => {
  //   if (nodes.length) {
  //     setSavePopupVisibility(!savePopupVisibility);
  //   } else {
  //     alert('Add nodes to save');
  //   }
  // };

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
      <div className="w-full flex flex-row justify-between fixed top-0 z-50">
        <div
          className={
            'flex flex-row justify-start m-3 bg-white items-center  duration-1000 shadow-lg rounded ' +
            (!state.toggleLeftBar ? 'w-max' : 'w-[10%]')
          }
        >
          <div className=" p-3 flex flex-row justify-start rounded  relative  ">
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
            <div className="flex flex-col  md:flex-row justify-between absolute -right-14 top-0 bg-white md:static   ">
              <Tooltip content="Add New" direction="bottom">
                <div
                  className="px-4 py-3 md:py-0  cursor-pointer ease-in duration-100 hover:scale-125 relative"
                  onClick={createNew}
                >
                  {getIcon('plus')}
                </div>
              </Tooltip>

              <Tooltip content="Save" direction="bottom">
                <div
                  className="px-4 py-3 md:py-0  cursor-pointer ease-in duration-100 hover:scale-125 relative"
                  onClick={() => toggle('toggleSavePopup')}
                >
                  <span className=""> {getIcon('save')}</span>
                </div>
              </Tooltip>

              <Tooltip content="Templates" direction="bottom">
                <div
                  className="px-4 py-3 md:py-0  cursor-pointer ease-in duration-100 hover:scale-125 relative"
                  onClick={() => toggle('toggleTemplatePopup')}
                >
                  {getIcon('templates')}
                </div>
              </Tooltip>

              <Tooltip content="Print" direction="bottom">
                <div
                  className="px-4 py-3 md:py-0  cursor-pointer ease-in duration-100 hover:scale-125 relative"
                  onClick={print}
                >
                  <span className="text-[#ccc]"> {getIcon('print')}</span>
                </div>
              </Tooltip>

              <Tooltip content="Import" direction="bottom">
                <div
                  className="px-4 py-3 md:py-0  cursor-pointer ease-in duration-100 hover:scale-125 relative"
                  onClick={() => toggle('toggleImportPopup')}
                >
                  <span className=""> {getIcon('import')}</span>
                </div>
              </Tooltip>

              <Tooltip content="Export" direction="bottom">
                <div
                  className="px-4 py-3 md:py-0  cursor-pointer ease-in duration-100 hover:scale-125 relative"
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
                className="cursor-pointer  ease-in duration-100 hover:scale-150"
                onClick={() => toggle('toggleLeftBar')}
              >
                {getIcon('rightarrow')}
              </span>
            ) : (
              <span
                className="cursor-pointer  ease-in duration-100 hover:scale-150"
                onClick={() => toggle('toggleLeftBar')}
              >
                {getIcon('leftarrow')}
              </span>
            )}
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
              className="cursor-pointer  ease-in duration-100 hover:scale-150"
              onClick={() => toggle('toggleRightBar')}
            >
              {getIcon('leftarrow')}
            </span>
          ) : (
            <span
              className="cursor-pointer  ease-in duration-100 hover:scale-150"
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
        onImport={() => toggle('toggleSavePopup')}
      />

      <SaveFlows
        closeHander={() => toggle('toggleSavePopup')}
        show={state.toggleSavePopup}
        title="Save Workflow"
        onSave={() => toggle('toggleSavePopup')}
      />
    </>
  );
};

export default Toolbar;
