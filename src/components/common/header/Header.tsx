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
  const productHuntUrl =
    'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=407405&theme=light';
  const togglehandler = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Nav className="duration-300 ease-in-out" data-aos="fade-down">
        <Container>
          <div className="p-2 w-fit">
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
          <a
            href="https://www.producthunt.com/posts/workflow-visualizer?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-workflow&#0045;visualizer"
            target="_blank"
            rel="noreferrer"
            className="hidden  md:flex"
          >
            <img src={productHuntUrl} alt="producthunt" />
          </a>
          <RightItemsContainer className="text-sm cursor-pointer">
            <a className="duration-100 ease-in nav-item hover:scale-125" onClick={togglehandler}>
              FAQ
            </a>
            <a
              className="duration-100 ease-in icon hover:scale-125"
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
        <div className="px-4 my-8 ">
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
