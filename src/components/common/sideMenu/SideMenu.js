import React from "react";

const SideMenu = ({ onAddDecisionNode, onAddStartNode, onAddEndNode, onAddProcessNode }) => {
  const onNodeAdd = (nodeType) => {
    switch (nodeType) {
      case "startNode":
        onAddStartNode(1);
        break;
      case "processNode":
        onAddProcessNode();
        break;
      case "decisionNode":
        onAddDecisionNode();
        break;
      case "endNode":
        onAddEndNode(0);
        break;
      default:
        onAddStartNode(1);
    }
  };

  return (
    <>
      <div className="flex align-middle w-[85px] fixed left-0 top-44 z-10  ">
        <div className=" bg-white flex flex-col z-30  my-auto overflow-auto">
          <div>
            <div data-effect="solid" data-tip="Start Node" onClick={() => onNodeAdd("startNode")} className="cursor-pointer ease-in duration-300 border-2 rounded-full border-[#2fa4be] border-solid bg-white w-[30px]  mx-auto p-2 m-6 hover:scale-110 "></div>
          </div>

          <div>
            <div data-effect="solid" data-tip="Process Node" onClick={() => onNodeAdd("processNode")} className="cursor-pointer ease-in duration-300 border-2  border-[#2fa4be] border-solid bg-white w-[30px] mx-auto p-2 m-6 hover:scale-110 "></div>
          </div>

          <div>
            <div data-effect="solid" data-tip="Decision Node" onClick={() => onNodeAdd("decisionNode")} className="cursor-pointer ease-in duration-300 border-2 rotate-45	 border-[#2fa4be] border-solid bg-white w-[30px] h-[30px] p-2 m-6 hover:scale-110 "></div>
          </div>

          <div>
            <div data-effect="solid" data-tip="End Node" onClick={() => onNodeAdd("endNode")} className="cursor-pointer ease-in duration-300 border-2 rounded-full border-[#2fa4be] border-solid bg-white w-[30px] p-2 m-6 hover:scale-110 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
