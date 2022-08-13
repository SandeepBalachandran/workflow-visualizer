import { NextPage } from 'next';
import Head from 'next/head';
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
        <title>Workflow Visualizer</title>
        <meta name="description" content="A simple app for workflow Visualization" />
      </Head>
      <Main>
        <Header />
        <div className="App w-full mt-5 xl:py-20">
          <Landing />
        </div>
      </Main>
    </>
  );
};

export default Home;
