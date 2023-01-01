import React from "react";
import { CurrentSlideContext } from "../components/portfolio/context/v1";
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
  const [current, setCurrent] = React.useState(0);

  return (
    <div className={gfont.variable}>
      <CurrentSlideContext.Provider value={{ current, setCurrent }}>
        <Component {...pageProps} />
      </CurrentSlideContext.Provider>
    </div>
  );
}

export default MyApp;
