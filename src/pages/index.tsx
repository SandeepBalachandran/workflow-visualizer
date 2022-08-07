import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import ReactTooltip from "react-tooltip";
import Header from "../components/common/header/Header";
import HomeContainer from "../components/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Workflow Visualizer</title>
        <meta
          name="description"
          content="A simple app for workflow Visualization"
        />
      </Head>

      <Header />
      <ReactTooltip effect="solid"  />
      <div className="App h-[100vh] w-full">
        <HomeContainer />
      </div>
    </>
  );
};

export default Home;
