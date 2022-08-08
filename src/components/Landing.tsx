import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Logo from '../../public/landing_logo.svg';
import { FaUserAltSlash, FaUserClock, FaSmile } from 'react-icons/fa';
import Link from 'next/link';
import { NextPage } from 'next';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width:400px;

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
const Landing: NextPage = () => {
  return (
    <>
      <Container>
        <div className="w-full flex flex-col lg:flex-row justify-between mb-8 md:mb-0">
          <div className="flex flex-col align-middle justify-center my-15 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl my-2 leading-[1.25]">
              Build your workflow <br />
              in no time
            </h1>
            <div className="w-full text-center lg:text-left">
              <Link href="/editor">
                <div className="w-[200px] rounded bg-full p-3 my-6 bg-white text-[#155bd5] text-center font-bold hover:cursor-pointer inline-block">
                  Get Started
                </div>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:my-20">
              <div className="text-center my-5 sm:my-0">
                <FaUserAltSlash className="inline text-3xl" />
                <h2 className="my-3">No signup/signin</h2>
                {/* <p>
                  Completely free and open source. No registration required. We do not store any of
                  your information. Create unlimited workflows using our tool.
                </p> */}
              </div>
              <div className="text-center my-5 sm:my-0">
                <FaUserClock className="inline text-3xl" />
                <h2 className="my-3">Build in minutes</h2>
                {/* <p>
                  Completely free and open source. No registration required. We do not store any of
                  your information. Create unlimited workflows using our tool.
                </p> */}
              </div>
              <div className="text-center my-5 sm:my-0">
                <FaSmile className="inline text-3xl" />
                <h2 className="my-3">Fit for your needs</h2>
                {/* <p>
                  Completely free and open source. No registration required. We do not store any of
                  your information. Create unlimited workflows using our tool.
                </p> */}
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
};

export default Landing;
