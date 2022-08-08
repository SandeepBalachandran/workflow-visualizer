import  { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Header from "../components/common/header/Header";
import Landing from "../components/Landing";
import styled from "styled-components";

const Main = styled.div`
  padding: 10px 5% 0;
  margin: auto;
  max-width: 100%;
  background:#155bd5;
  color:#fff;
  min-height:100vh;

  & > div {
    margin-bottom: 25px;
  }
`;

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
