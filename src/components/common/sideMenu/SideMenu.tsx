import React from 'react';
import Tooltip from '../tooltip/Tooltip';

type sideMenuProps = {
  onAddDecisionNode: any;
  onAddStartNode: any;
  onAddEndNode: any;
  onAddProcessNode: any;
};
const SideMenu = ({
  onAddDecisionNode,
  onAddStartNode,
  onAddEndNode,
  onAddProcessNode,
}: sideMenuProps) => {
  const onNodeAdd = (nodeType: string): void => {
    switch (nodeType) {
      case 'startNode':
        onAddStartNode(1);
        break;
      case 'processNode':
        onAddProcessNode();
        break;
      case 'decisionNode':
        onAddDecisionNode();
        break;
      case 'endNode':
        onAddEndNode(0);
        break;
      default:
        onAddStartNode(1);
    }
  };

  return (
    <>
      <div className="flex align-middle w-[60px] fixed left-0 top-44 z-10 m-3 print:hidden  ">
        <div className="relative z-30 flex flex-col my-auto bg-white rounded shadow-lg  overflow-none">
          <div>
            <Tooltip content="Start Node" direction="right">
              <div
                onClick={() => onNodeAdd('startNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2 rounded-full border-[#000000] border-solid bg-white w-[30px]  mx-auto p-2 m-4  "
              ></div>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="Process Node" direction="right">
              <div
                onClick={() => onNodeAdd('processNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2  border-[#000000] border-solid bg-white w-[30px] mx-auto p-2 m-4  "
              ></div>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="Decision Node" direction="right">
              <div
                onClick={() => onNodeAdd('decisionNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2 rotate-45	 border-[#000000] border-solid bg-white w-[25px] h-[25px] p-2 ml-6 my-6 mr-6  "
              ></div>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="End Node" direction="right">
              <div
                onClick={() => onNodeAdd('endNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2  border-[#000000] border-solid rounded-full bg-white w-[30px] mx-auto p-2 m-4  "
              ></div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
