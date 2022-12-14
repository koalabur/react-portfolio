// React
import { useContext } from "react";

// Next
import Head from "next/head";

// Framer motion
import { AnimatePresence, motion } from "framer-motion";

// Context
import { AppContext } from "../context/GlobalState";

// Components
import PreLoader from "../components/preLoader/v1";
import Sidebar from "../components/sidebar/v2";
import Nav from "../components/nav/v1";
import Intro from "../components/intro/v1";
import About from "../components/about/v2";
import Portfolio from "../components/portfolio/v1";
import Footer from "../components/footer/v1";

export default function Home() {
  // Global state
  const { isSiteReady } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Cameron R Design</title>
        <meta name="description" content="React/ Next.js Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Components below */}
      <Nav />
      <main>
        <AnimatePresence>
          {!isSiteReady ? (
            <motion.div
              animate={{
                position: "fixed",
                zIndex: 25,
                width: "100%",
                height: "100%",
              }}
              exit={{ opacity: 0, y: -100 }}
            >
              <PreLoader />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <Intro />
        <About />
        <Portfolio />
      </main>
      <Sidebar />
      <Footer />
    </>
  );
}
