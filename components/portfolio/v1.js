import { useContext, useState, useRef } from "react";

// Component import
import PortfolioItems from "/components/portfolio/child/v1.js";

// Context
import { AppContext } from "../../context/GlobalState";

// Hook
import { useGetCol } from "../../hooks/useGetFirestore";
import { useInterObs } from "../../hooks/useIntersectionObs";

// Style import
import styles from "/styles/portfolio/v1.module.scss";

export default function PortfolioSection() {
  // Global state
  const { slide, setSlide, setSection } = useContext(AppContext);

  // Local state
  const [portfolio, setPortfolio] = useState([]);

  const portfolioRef = useRef();

  // Get collection from firestore
  useGetCol("portfolio", setPortfolio);

  // When #portfolio section is active, highlight in nav
  useInterObs(portfolioRef, setSection, 0.5);

  // Length of imported data array
  const length = portfolio.length;

  function nextSlide() {
    // if current slide is equal to the length of the array then reset to 0
    // else + 1 and do normal thingy
    setSlide(slide === length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    // if current slide is equal to 0 (first slide) then go to the end
    // else - 1 and do normal thingy
    setSlide(slide === 0 ? length - 1 : slide - 1);
  }

  return (
    <section id="portfolio" className={styles.portfolio} ref={portfolioRef}>
      <h1 className={styles.portfolio__title}>&lt; portfolio /&gt;</h1>
      <p className={styles.portfolio__index}>
        {slide + 1}/{portfolio.length}
      </p>
      <div className={styles.portfolio__row}>
        <PortfolioItems />
        <button
          onClick={prevSlide}
          className={`${styles["portfolio__row-arrow"]} ${styles["portfolio__row-arrow--left"]}`}
        >
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className={`${styles["portfolio__row-arrow"]} ${styles["portfolio__row-arrow--right"]}`}
        >
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
