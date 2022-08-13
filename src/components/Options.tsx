import React from 'react';
import useStore from '../store/store';
import Router from 'next/router';


const Options = () => {
  const { deleteAll, setLabProcedureFlow } = useStore();
  const useFresh = () => {
    deleteAll();
    Router.push('/editor');
  };

  const useExisting = () => {
    setLabProcedureFlow();
    Router.push('/editor');
  };
  return (
    <>
      <div className="w-cover h-screen bg-[#155bd5] flex items-center	 justify-center">
        <div className="w-cover lg:w-[50%] h-96 p-6 flex flex-col">
          <div
            className="w-cover lg:w-[50%] mx-auto p-5 m-8 text-center border-2 cursor-pointer rounded-lg border-white bg-[#155bd5] text-white hover:scale-110 ease-in duration-300"
            onClick={useFresh}
          >
            Start a new one
          </div>
          <div
            className="w-cover lg:w-[50%] mx-auto p-5 m-8 text-center border-2 cursor-pointer rounded-lg border-white bg-[#155bd5] text-white hover:scale-110 ease-in duration-300"
            onClick={useExisting}
          >
            Use a template
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
