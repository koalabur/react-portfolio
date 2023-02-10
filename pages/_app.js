// React
import React, { useEffect } from "react";

// Hook
import { UseUpdateUserCount } from "../hooks/useGetFirestore";

// Cookies
import { setCookie, getCookie } from "cookies-next";

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
  // This function will get the user's IP and set it as a key (CRD_UNIQUE_USER_REACT) value (their ip) in the cookies
  const expIn30Days = 2592000;
  async function getIp() {
    if (!getCookie("CRD_UNIQUE_USER_REACT")) {
      try {
        // Get Data
        const data = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEO_KEY}`
        );
        // Get Result
        const result = await data.json();
        // Set IP in cookies
        setCookie("CRD_UNIQUE_USER_REACT", result.ip, { maxAge: expIn30Days });
        // Compare cookie IP with API IP
        if (getCookie("CRD_UNIQUE_USER_REACT") === result.ip) {
          // Update firestore + 1
          UseUpdateUserCount("site_visits", "react");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  // Do everything above after component renders
  useEffect(() => {
    getIp();
  }, []);

  return (
    <div className={gfont.variable}>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </div>
  );
}

export default MyApp;
