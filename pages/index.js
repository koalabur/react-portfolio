// Next
import Head from "next/head";

// Components
import Sidebar from "../components/sidebar/FullHeightSidebar";
import Nav from "../components/nav/MainNav";
import Intro from "../components/intro/BigKoalaIntro";
import About from "../components/about/GSAPAbout";
import Portfolio from "../components/portfolio/BasicPortfolio";
import Footer from "../components/footer/BasicFooter";

export default function Home({
  navLinks,
  introContent,
  whoAmIData,
  codeyThingsData,
  coolConceptsData,
  coolThingsData,
  basicPortfolioContent,
}) {
  return (
    <>
      <Head>
        <title>Cameron R Design Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="React/ Next.js Portfolio created by Cameron"
        />
        <meta property="og:title" content="Cameron R Design Portfolio" />
        <meta
          property="og:description"
          content="React/ Next.js Portfolio created by Cameron"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dg6sd9yyx/image/upload/v1676137078/meta/koalareact-ogimage_ibr68g.jpg"
        />
      </Head>

      {/* Components below */}
      <Nav navLinks={navLinks} />
      <main>
        <Intro introContent={introContent} />
        <About
          whoAmIData={whoAmIData}
          codeyThingsData={codeyThingsData}
          coolConceptsData={coolConceptsData}
          coolThingsData={coolThingsData}
        />
        <Portfolio basicPortfolioContent={basicPortfolioContent} />
      </main>
      <Sidebar />
      <Footer />
    </>
  );
}

// Rendering contentful data on the server side then passing to components
// React is dumb, has to be done this way for a better UX
// just end me now
export async function getServerSideProps(context) {
  async function UseContentful(query) {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}/environments/master`,
      {
        // It's confusing. Just smile and wave
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_CDA}`,
        },
        body: JSON.stringify({ query }),
      }
    );

    const data = await res.json();

    return data;
  }

  // Data for <Nav /> component
  const navQuery = `
    query navEntryQuery {
      nav(id: "3JoFznXXx6b4rrvIx9UKqk") {
        link
      }
    }
  `;
  const navLinks = await UseContentful(navQuery);

  // Data for <Intro /> component
  const bigKoalaIntroQuery = `
    query introBigKoalaEntryQuery {
      introBigKoala(id: "5ZRxIErZqlgTyN59tjmj6t") {
        image {
          url,
          title
        }
        title
        icon {
          url,
          title
        }
      }
    }
  `;
  const introContent = await UseContentful(bigKoalaIntroQuery);

  // Data for <About /> component
  const GSAPAboutQuery = `
    query aboutCollectionQuery {
      aboutCollection {
        items {
          id,
          title,
          subtitle,
          contentInJsonFormat,
          contentInListFormat
        }
      }
    }
  `;
  const GSAPAboutContent = await UseContentful(GSAPAboutQuery);
  const whoAmIData = GSAPAboutContent.data.aboutCollection.items.find(
    ({ id }) => id == "1"
  );
  const codeyThingsData = GSAPAboutContent.data.aboutCollection.items.find(
    ({ id }) => id == "2"
  );
  const coolConceptsData = GSAPAboutContent.data.aboutCollection.items.find(
    ({ id }) => id == "3"
  );
  const coolThingsData = GSAPAboutContent.data.aboutCollection.items.find(
    ({ id }) => id == "4"
  );

  // Data for <Portfolio /> component
  const basicPortfolioQuery = `
      query portfolioCollectionQuery {
        portfolioCollection {
          items {
            id,
            title,
            url,
            image {
              url
            },
            tools,
            display
          }
        }
      }
    `;
  const rawData = await UseContentful(basicPortfolioQuery);
  const basicPortfolioContent =
    rawData.data.portfolioCollection.items.sort(function (a, b) {
      return a.id - b.id;
    });

  return {
    props: {
      navLinks,
      introContent,
      whoAmIData,
      codeyThingsData,
      coolConceptsData,
      coolThingsData,
      basicPortfolioContent,
    },
  };
}
