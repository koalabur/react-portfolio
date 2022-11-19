import Head from 'next/head'

// Components
import ExternalLinks from "/components/externalLinks/v1"
import Nav from "/components/nav/v1"
import Intro from "/components/intro/v1"
import About from "/components/about/v1"
import Portfolio from "/components/portfolio/v1"
import Footer from "/components/footer/v1"

export default function Home() {
  return (
    <>
      <Head>
        <title>Cameron R Design</title>
        <meta name="description" content="React18 Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Components below */}
      <ExternalLinks />
      <Nav />
      <Intro />
      <About />
      <Portfolio />
      <Footer />
    </>
  )
}
