import { useContext, useState, useRef, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Component import
import PortfolioItems from "/components/portfolio/child/PortfolioItems.js";

// Context
import { AppContext } from "../../context/GlobalState";

// Style import
import styles from "/styles/portfolio/v1.module.scss";

export default function BasicPortfolio({ basicPortfolioContent }) {
  // Global state
  const { slide, setSlide, setSection } = useContext(AppContext);

  // Local state
  const [portfolio, setPortfolio] = useState([]);

  // Element refs
  const portfolioRef = useRef();

  // When #portfolio section is active, send to global state
  const { ref: inViewRef, inView: portfolioRefIsVisible } = useInView({
    threshold: 0.5,
    rootMargin: "50px",
  });

  // Use `useCallback` so we don't recreate the function on each render
  const setPortfolioRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      portfolioRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  // If #portfolio is visible then send ID to global setSection
  useEffect(() => {
    portfolioRefIsVisible
      ? setSection(portfolioRef.current.id)
      : setSection("");
  }, [portfolioRefIsVisible, setSection]);

  // Callback func to get data from child
  const childSlideData = (payload) => {
    setPortfolio(payload);
  };

  return (
    <section id="projects" className={styles.portfolio} ref={setPortfolioRefs}>
      <h1 className={styles.portfolio__title}>&lt; projects /&gt;</h1>
      <PortfolioItems
        childSlideData={childSlideData}
        basicPortfolioContent={basicPortfolioContent}
      />
    </section>
  );
}
