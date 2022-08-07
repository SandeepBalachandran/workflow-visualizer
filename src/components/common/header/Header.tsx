import React, { useState } from "react";
import { FaUserAlt, FaInfoCircle, FaTimesCircle } from "react-icons/fa";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const clickHandler = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="fixed w-full flex flex-row  shadow-xl z-[40] ease-in-out duration-300 bg-white justify-between">
        <div className="w-[10%] p-2"></div>
        <div className="p-2 flex align-middle justify-center m-3 text-lg cursor-pointer">
          {/* <FaInfoCircle className="user-account text-[#395383] mx-2" onClick={clickHandler} /> */}
          <FaUserAlt className="user-account text-[#395383] mx-2" />
        </div>
      </div>
      {visible && (
        <div className="flex align-middle justify-center h-screen w-full fixed left-0 top-0  bg-black/40 z-50">
          <div className="w-[70%] h-auto bg-white my-auto relative node-wrapper process-node-wrapper shadow-xl rounded-xl border-slate-600 border b ">
            <div className="border-b-2 m-6">
              <h1>Scope</h1>
            </div>
            <div className="my-8 px-4 ">
              <ul className="list-disc">
                <li className="m-6">A flow diagram will be available in the home page which is SOP of the scientific experiment provided with the task description</li>
                <li className="m-6"> All nodes are draggable and removable. All edges those which are associated with the removed nodes will be removed together as well</li>
                <li className="m-6"> New nodes ( Start node , Process node, Decision node and End node for now) can be added from the list of nodes available in the menu</li>
                <li className="m-6"> Newly added nodes can be connected with existing flow chart</li>
                <li className="m-6"> Labels can be edited for all nodes</li>
              </ul>
            </div>
            <div className="top-2 right-2 absolute cursor-pointer" onClick={clickHandler}>
              <FaTimesCircle />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
