import Head from "next/head";

// Components
import Sidebar from "/components/sidebar/v2";
import Nav from "/components/nav/v1";
import Intro from "/components/intro/v1";
import About from "/components/about/v1";
import Portfolio from "/components/portfolio/v1";
import Footer from "/components/footer/v1";

export default function Home() {
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
