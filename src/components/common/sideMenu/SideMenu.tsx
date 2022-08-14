import React from 'react';
import Tooltip from '../tooltip/Tooltip';

const SideMenu = ({
  onAddDecisionNode,
  onAddStartNode,
  onAddEndNode,
  onAddProcessNode,
}: {
  onAddDecisionNode: any;
  onAddStartNode: any;
  onAddEndNode: any;
  onAddProcessNode: any;
}) => {
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
      <div className="flex align-middle w-[60px] fixed left-0 top-44 z-10 m-3  ">
        <div className=" bg-white flex flex-col z-30  my-auto overflow-none rounded shadow-lg relative">
          <div>
            <Tooltip content="Start Node" direction="right">
              <div
                onClick={() => onNodeAdd('startNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2 rounded-full border-[#2fa4be] border-solid bg-white w-[30px]  mx-auto p-2 m-4  "
              ></div>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="Process Node" direction="right">
              <div
                onClick={() => onNodeAdd('processNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2  border-[#2fa4be] border-solid bg-white w-[30px] mx-auto p-2 m-4  "
              ></div>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="Decision Node" direction="right">
              <div
                onClick={() => onNodeAdd('decisionNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2 rotate-45	 border-[#2fa4be] border-solid bg-white w-[25px] h-[25px] p-2 ml-6 my-6 mr-6  "
              ></div>
            </Tooltip>
          </div>

          <div>
            <Tooltip content="End Node" direction="right">
              <div
                onClick={() => onNodeAdd('endNode')}
                className="cursor-pointer ease-in duration-100 hover:scale-125 border-2  border-[#2fa4be] border-solid rounded-full bg-white w-[30px] mx-auto p-2 m-4  "
              ></div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
