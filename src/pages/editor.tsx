import Head from 'next/head';
import React from 'react';
import EditorContainer from '../components/Editor';
import Toolbar from '../components/Toolbar';

const Editor = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Workflow Visualizer</title>
        <meta name="description" content="A simple app for workflow Visualization" />
      </Head>
      <Toolbar />
      <EditorContainer />
    </>
  );
};

export default Editor;
