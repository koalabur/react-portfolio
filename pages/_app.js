import React from "react";
import { AppContextProvider } from "../context/GlobalState";
import "/styles/scss/globals.scss";

import { IBM_Plex_Sans } from "@next/font/google";

const gfont = IBM_Plex_Sans({
  weight: ["200", "400", "600"],
  preload: true,
  subsets: ["latin"],
  fallback: ["arial"],
  variable: "--main-font",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={gfont.variable}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  );
}

export default MyApp;
