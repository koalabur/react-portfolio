// React
import React from "react";

// GA
import { GoogleAnalytics } from "nextjs-google-analytics";

// Global State
import { AppContextProvider } from "../context/GlobalState";

// Global Vars
import "/styles/scss/globals.scss";

import { IBM_Plex_Sans } from "@next/font/google";

// https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85?permalink_comment_id=3886909#gistcomment-3886909
if (typeof window === "undefined") React.useLayoutEffect = React.useEffect;

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
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  );
}

export default MyApp;
