import React, { useState } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { NextPage } from 'next';

const Nav = styled.div`
  // position: fixed;
  width: 100%;

  z-index: 40;

  top: 0;
`;

const Container = styled.div`
  display: flex;
  max-width:400px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  columng-gap: 2rem;
  justify-content: space-between;
  column-gap:1.5rem;
  

  .nav-item {
    border-bottom: 1px solid #fff;
    padding: 0.2rem;
    color: #fff;
    // margin: 0 1rem;
  }
`;
const Header: NextPage = () => {
  const [visible, setVisible] = useState(false);
  const clickHandler = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Nav className="ease-in-out duration-300">
        <Container>
          <div className="w-[10%] p-2">
            <Link href="/">
              <Image src={Logo} alt="logo" height="50px" width="50px" className="rounded-full" />
            </Link>
          </div>
          <RightItemsContainer className="text-sm cursor-pointer">
            <a className="nav-item show-web" onClick={clickHandler}>
              FAQ
            </a>
            <a className="nav-item show-web">About</a>
          </RightItemsContainer>
        </Container>
      </Nav>
      {visible && (
        <div className="flex align-middle justify-center h-screen w-full fixed left-0 top-0  bg-black/40 z-50">
          <div className="w-[70%] h-auto bg-white my-auto relative node-wrapper process-node-wrapper shadow-xl rounded-xl border-slate-600 border text-black ">
            <div className="border-b-2 m-6">
              <h1>Frequent Asked Questions</h1>
            </div>
            <div className="my-8 px-4 ">
              <ul className="list-disc">
                <li className="m-6">
                  <div className="flex flex-col">
                    <div className="font-bold">What is this? </div>
                    <div className="my-3">In a nutshell - You can create flow chart with it</div>
                  </div>
                </li>
                <li className="m-6">
                  <div className="flex flex-col">
                    <div className="font-bold">How is it helpful for me? </div>
                    <div className="my-3">Let's say you have a procedure to do  and you want to present it a way that anyone can understand it very quickly. Then you are in the right place</div>
                  </div>
                </li>

                <li className="m-6">
                  <div className="flex flex-col">
                    <div className="font-bold">How to start? </div>
                    <div className="my-3"> Click on Get started you will be there in no time</div>
                  </div>
                </li>
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
