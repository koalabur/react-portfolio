// Next
import Head from "next/head";

// Components
import Sidebar from "../components/sidebar/FullHeightSidebar";
import Nav from "../components/nav/MainNav";
import Intro from "../components/intro/BigKoalaIntro";
import About from "../components/about/GSAPAbout";
import Portfolio from "../components/portfolio/GSAPPortfolio";
import Footer from "../components/footer/BasicFooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cameron R Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="React/ Next.js Portfolio created by Cameron Roberts"
        />
        <meta
          property="og:title"
          content="React/ Next.js Portfolio | Cameron Roberts"
        />
        <meta
          property="og:description"
          content="React/ Next.js Portfolio created by Cameron Roberts"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dg6sd9yyx/image/upload/v1676137078/meta/koalareact-ogimage_ibr68g.jpg"
        />
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
