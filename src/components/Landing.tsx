import Image from 'next/image';
import React from 'react';
import Logo from '../../public/landing_logo.svg';
import { NextPage } from 'next';
import Router from 'next/router';
import { isInProgress } from '../helpers/helper';
import useStore from '../store/store';
import { getIcon } from '../utils/icons';
import { Container } from '../styles/style';

const Landing: NextPage = () => {
  // const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();
  const routeToEditor = () => {
    isInProgress() ? Router.push('/editor') : Router.push('/choose');
  };
  // if (nodes.length) {
  return (
    <>
      <Container>
        <div className="w-full flex flex-col lg:flex-row justify-between mb-8 md:mb-0">
          <div className="flex flex-col align-middle justify-center my-15 text-center lg:text-left">
            <h1 className="lg:leading-[1.25] text-4xl lg:text-6xl my-2 ">
              Build your workflow <br />
              in no time
            </h1>
            <div className="w-full text-center lg:text-left">
              <div
                onClick={routeToEditor}
                className="w-[200px] rounded p-3 my-6 bg-white text-[#155bd5] text-center font-bold hover:cursor-pointer inline-block"
              >
                Get Started
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:my-20">
              <div className="text-center my-5 sm:my-0">
                <span className="text-3xl flex justify-center">{getIcon('noregistration')}</span>
                <h2 className="my-3">No signup/signin</h2>
              </div>
              <div className="text-center my-5 sm:my-0">
                <span className="text-3xl flex justify-center">{getIcon('fast')}</span>
                <h2 className="my-3">Build in minutes</h2>
              </div>
              <div className="text-center my-5 sm:my-0">
                <span className="text-3xl flex justify-center">{getIcon('happy')}</span>
                <h2 className="my-3">Fit for your needs</h2>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl  border-black border-2 text-center">
            <Image src={Logo} alt="logo" height="400px" width="400px" />
          </div>
        </div>
      </Container>
    </>
  );
  // }

  // else {
  //   typeof window !== 'undefined' && Router.push('/editor');
  // }
};

export default Landing;
