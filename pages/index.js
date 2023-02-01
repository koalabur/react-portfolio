// React
import { useContext } from "react";

// Next
import Head from "next/head";

// Context
import { AppContext } from "../context/GlobalState";

// Components
import Sidebar from "../components/sidebar/FullHeightSidebar";
import Nav from "../components/nav/MainNav";
import Intro from "../components/intro/BigKoalaIntro";
import About from "../components/about/GSAPAbout";
import Portfolio from "../components/portfolio/GSAPPortfolio";
import Footer from "../components/footer/BasicFooter";

export default function Home() {
  // Global state
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
        <Intro />
        <About />
        <Portfolio />
      </main>
      <Sidebar />
      <Footer />
    </>
  );
}
