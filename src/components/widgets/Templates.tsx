// WIP

import React from 'react';
import useStore from '../../store/store';
import Popup from '../common/popup/Popup';
import { templates } from '../../models/models';
import initialNodes from '../../utils/nodes';
import initialEdges from '../../utils/edges';
const Templates = ({ closeHandler, show, title, onChoose }: any) => {
  const { setCustom } = useStore();
  const createNew = () => {
    setCustom([], []);
  };
  const setLabProcedureFlow = () => {
    setCustom(initialNodes, initialEdges);
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
        <div className="flex flex-row flex-wrap justify-around w-full gap-3 p-4">
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
