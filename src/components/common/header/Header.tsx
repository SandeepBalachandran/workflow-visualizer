import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import { NextPage } from 'next';
import Popup from '../popup/Popup';
import { getIcon } from '../../../utils/icons';
import { Container, Nav, RightItemsContainer } from '../../../styles/style';

const Header: NextPage = () => {
  const [visible, setVisible] = useState(false);
  const togglehandler = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Nav className="ease-in-out duration-300" data-aos="fade-down">
        <Container>
          <div className="w-fit p-2">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                height="50px"
                width="50px"
                className="rounded-full cursor-pointer"
              />
            </Link>
          </div>
          <RightItemsContainer className="text-sm cursor-pointer">
            <a className="nav-item ease-in duration-100 hover:scale-125" onClick={togglehandler}>
              FAQ
            </a>
            <a
              className="icon ease-in duration-100 hover:scale-125"
              href="https://github.com/SandeepBalachandran/workflow-visualizer/"
              target="_blank"
              rel="noreferrer"
            >
              {getIcon('github')}
            </a>
          </RightItemsContainer>
        </Container>
      </Nav>

      <Popup onClose={togglehandler} show={visible} title="Frequently Asked Questions">
        <div className="my-8 px-4 ">
          <ul className="list-disc">
            <li className="m-6">
              <div className="flex flex-col">
                <div className="font-bold">What is this? </div>
                <div className="my-3">In a nutshell - Create workflows with it in no time</div>
              </div>
            </li>
            <li className="m-6">
              <div className="flex flex-col">
                <div className="font-bold">How is it helpful for me? </div>
                <div className="my-3">
                  Imagine you have a procedure to do and you want to present it a way that anyone
                  can understand it very quickly. Then you are in the right place
                </div>
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
      </Popup>
    </>
  );
};

export default Header;
