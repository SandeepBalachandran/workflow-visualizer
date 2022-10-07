import type { AppProps } from 'next/app';
import * as React from 'react';
import Head from 'next/head';
import '../styles/global.css';
import 'reactflow/dist/style.css';
import OgImage from '../../public/workflow.png';
import { disableMenu, handelRightClick } from '../utils/accessibility';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    document.addEventListener('keydown', disableMenu, false);
    document.addEventListener('contextmenu', handelRightClick);
    return () => {
      document.removeEventListener('keydown', disableMenu, false);
      document.removeEventListener('contextmenu', handelRightClick);
    };
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Workflow Visualizer</title>
        <meta name="description" content="A simple app for workflow Visualization" />
        <meta
          name="description"
          content="Workflow visualizer is for creating workflows from your procedure. So anyone new to the system can easily catch up from the visual representation"
        />
        <meta
          name="keywords"
          content="Worflow, workflow, visualizer, Visualizer, workflow-visualizer, flow,flow-creator, Sandeep B"
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Workflow Visualizer" />
        <meta
          property="og:description"
          content="Workflow visualizer is for creating workflows from your procedure. So anyone new to the system can easily catch up from the visual representation"
        />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sandeepcristi" />
        <meta name="twitter:creator" content="@sandeepcristi" />
        <meta property="og:image" content={OgImage.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
