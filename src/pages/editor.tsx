import Head from 'next/head';
import React from 'react';
import Toast from '../components/common/toast/Toast';
import EditorContainer from '../components/Editor';
import Toolbar from '../components/Toolbar';
import { ToastList } from '../models/models';

const Editor = () => {
  const testList: ToastList[] = [
    {
      title: 'Yup',
      description: 'Workflow Saved successfully',
      type: 'success',
    },
  ];
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Workflow Visualizer</title>
        <meta name="description" content="A simple app for workflow Visualization" />
      </Head>
      <Toolbar />
      {/* <Toast toastList={testList} position="top-right" /> WIP */}
      <EditorContainer />
    </>
  );
};

export default Editor;
