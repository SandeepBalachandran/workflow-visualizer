import Image from 'next/image';
import React from 'react';
import Logo from '../../public/landing_logo.svg';
import { NextPage } from 'next';
import Router from 'next/router';
import { isInProgress } from '../helpers/helper';
import useStore from '../store/store';
import { getIcon } from '../utils/icons';
import { Container } from '../styles/style';

// import DemoContainer from './Demo';
const Landing: NextPage = () => {
  const routeToEditor = () => {
    isInProgress() ? Router.push('/editor') : Router.push('/choose');
  };
  // if (nodes.length) {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-between w-full mb-8 lg:flex-row md:mb-0">
          <div className="flex flex-col justify-center text-center align-middle my-15 lg:text-left">
            <h1 className="lg:leading-[1.25] text-4xl lg:text-6xl my-2 ">
              Build your workflow <br />
              in no time
            </h1>
            <div className="w-full text-center lg:text-left">
              <div
                onClick={routeToEditor}
                className="actionBtn relative w-[150px] rounded p-3 my-6 bg-white text-[#155bd5] text-center font-bold hover:cursor-pointer inline-block transition-all	duration-75 "
              >
                Get Started
              </div>
            </div>

            <div className="flex flex-col justify-between sm:flex-row sm:my-20">
              <div className="my-5 text-center sm:my-0">
                <span className="flex justify-center text-3xl">{getIcon('noregistration')}</span>
                <h2 className="my-3">No signup/signin</h2>
              </div>
              <div className="my-5 text-center sm:my-0">
                <span className="flex justify-center text-3xl">{getIcon('fast')}</span>
                <h2 className="my-3">Build in minutes</h2>
              </div>
              <div className="my-5 text-center sm:my-0">
                <span className="flex justify-center text-3xl">{getIcon('happy')}</span>
                <h2 className="my-3">Fit for your needs</h2>
              </div>
            </div>
          </div>
          <div className="p-8 text-center bg-white border-2 border-black rounded-xl">
            <Image src={Logo} alt="logo" height="400px" width="400px" />
            {/* // Todo - Landing page demo - WIP */}
            {/* <DemoContainer/> */}
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
