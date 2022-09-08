import React from 'react';
import useStore from '../../store/store';
import { getIcon } from '../../utils/icons';
import Dropdown from '../common/dropdown/Dropdown';

const SavedFlowsList = ({ menuLabel }: any) => {
  const { nodes, edges, deleteAll, setLabProcedureFlow, onAddToastMsg, setCustom } = useStore();
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

  const setWorkflow = ({ nodes, edges }: any) => {
    setCustom({ nodes, edges });
  };
  const deleteItem = (menuItem: any) => {
    if (localStorage.getItem('savedFlows')) {
      const saved = JSON.parse(localStorage.getItem('savedFlows')!);
      delete saved[menuItem['name']];
      if (Object.keys(saved).length) {
        localStorage.setItem('savedFlows', JSON.stringify(saved));
        setWorkflows(makeStrcture(saved));
      } else {
        localStorage.removeItem('savedFlows');
        setWorkflows([]);
      }
    }
    onAddToastMsg({
      title: 'No more!',
      description: 'Workflow Deleted successfully',
      type: 'success',
    });
  };

  return (
    <>
      <Dropdown menuLabel={menuLabel}>
        {Boolean(workflows.length) &&
          workflows.map((menuItem: any, index: number) => {
            return (
              <React.Fragment key={index}>
                <div className="flex flex-row justify-between hover:bg-slate-100 cursor-pointer border-b-slate-200 border">
                  <div className="p-5">
                    <span className="">{getIcon('diagram')}</span>
                  </div>
                  <div className="p-5 " onClick={() => setWorkflow(menuItem)}>
                    {menuItem.name}
                  </div>
                  <div className="flex justify-center item-center p-6 text-red-700">
                    <span className="cursor-pointer" onClick={() => deleteItem(menuItem)}>
                      {getIcon('delete')}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        {Boolean(!workflows.length) && (
          <React.Fragment>
            <div className="flex flex-row justify-between hover:bg-slate-100 cursor-pointer">
              <div className="p-5 text-[#7c7c7c] flex flex-col justify-center gap-3">
                <span className="flex justify-center">{getIcon('happy')}</span>
                <span>No items</span>
              </div>
            </div>
          </React.Fragment>
        )}
      </Dropdown>
    </>
  );
};

export default SavedFlowsList;
