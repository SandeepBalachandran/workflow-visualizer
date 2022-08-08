import type { AppProps } from "next/app";
import * as React from "react";
import "../styles/global.css";
import ReactTooltip from "react-tooltip";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ReactTooltip effect="solid"  />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
