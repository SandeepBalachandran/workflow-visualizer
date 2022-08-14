import React from 'react';
import useStore from '../../store/store';
import { getIcon } from '../../utils/icons';
import Dropdown from '../common/dropdown/Dropdown';

const SavedFlowsList = ({ menuLabel }: any) => {
  const { nodes, edges, deleteAll, setLabProcedureFlow, setCustom } = useStore();
  const [workflows, setWorkflows] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem('savedFlows')) {
      const saved = JSON.parse(localStorage.getItem('savedFlows')!);
      setWorkflows(makeStrcture(saved));
    }
  }, []);

  const makeStrcture = (input: any) => {
    const newArray: any = Object.keys(input).map((item) => {
      return {
        name: item,
        nodes: input[item]['nodes'],
        edges: input[item]['edges'],
      };
    });
    return newArray;
  };

  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('storage', () => {
  //       if (localStorage.getItem('savedFlows')) {
  //         const saved = JSON.parse(localStorage.getItem('savedFlows')!);
  //         setWorkflows(makeStrcture(saved));
  //       }
  //     });
  //   }

  //   const setWorkflow = () => {
  //     const wf = getSavedWorkFlows();
  //     setWorkflows(wf);
  //     console.log(wf);
  //     setCustom();
  //   };

  //   const chooseWorkflow = (item: any) => {};

  return (
    <>
      <Dropdown menuLabel={menuLabel}>
        {workflows ? (
          workflows.map((menuItem: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-row justify-between">
                  <div className="p-5 hover:bg-slate-100 cursor-pointer">{menuItem.name}</div>
                  <div className="flex justify-center item-center p-6 text-red-700">
                    <span className="cursor-pointer">{getIcon('delete')}</span>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        ) : (
          <>
            <div className="p-4 hover:bg-slate-100 cursor-pointer">No Saved items</div>
          </>
        )}
      </Dropdown>
    </>
  );
};

export default SavedFlowsList;
