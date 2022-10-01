import type { AppProps } from 'next/app';
import * as React from 'react';
import '../styles/global.css';
import 'reactflow/dist/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
