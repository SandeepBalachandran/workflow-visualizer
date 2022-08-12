// WIP

import React from 'react';
import useStore from '../../store/store';
import Popup from '../common/popup/Popup';
import { templates } from '../../models/models';

const Templates = ({ closeHandler, show, title, onChoose }: any) => {
  const { nodes, edges, deleteAll, setLabProcedureFlow, setCustom } = useStore();
  const createNew = () => {
    deleteAll();
  };

  const choose = (template: templates) => {
    template.method();
    onChoose();
  };

  const templates: templates[] = [
    {
      id: 1,
      title: 'Create New',
      method: createNew,
    },
    {
      id: 2,
      title: 'Laboratory Flow',
      method: setLabProcedureFlow,
    },
    {
      id: 3,
      title: 'Simple Flow',
      method: createNew,
    },
    {
      id: 4,
      title: 'Coming Soon',
      method: createNew,
    },
  ];

  return (
    <>
      <Popup onClose={closeHandler} show={show} title={title}>
        <div className="p-4 w-full flex flex-row justify-around gap-3 flex-wrap">
          {templates.map((template, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  className="p-24 m-2 rounded border-slate-400 shadow-lg border-2 cursor-pointer bg-[#155bd5] text-white"
                  onClick={() => choose(template)}
                >
                  {template.title}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </Popup>
    </>
  );
};

export default Templates;
