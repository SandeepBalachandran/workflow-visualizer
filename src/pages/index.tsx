/* eslint-disable @next/next/no-sync-scripts */
import { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import * as React from 'react';
import Header from '../components/common/header/Header';
import Landing from '../components/Landing';
import { Main } from '../styles/style';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="./aos.js"></script>
        <title>Workflow Visualizer</title>
        <meta name="description" content="A simple app for workflow Visualization" />
        <link rel="stylesheet" href="./aos.module.css" />
      </Head>
      <Main>
        <Header />
        <div className="App w-full mt-5 xl:py-20">
          <Landing />
        </div>
      </Main>
      <Script id="my-Script">AOS.init();</Script>
    </>
  );
};

export default Home;
