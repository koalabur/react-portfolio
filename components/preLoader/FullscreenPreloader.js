// React
import { useEffect, useContext, useState } from "react";

// Context
import { AppContext } from "../../context/GlobalState";

// Styles
import styles from "/styles/preLoader/fullscreen-preloader.module.scss";

export default function FullscreenPreloader() {
  // Global State
  const { isSiteReady } = useContext(AppContext);

  // Local State
  const [mssg, setMssg] = useState([
    "Loading site...",
    "Removing stains...",
    "99.9999% complete...",
    "Doing a live NPM install.",
    "I promise my other loading screen is much faster.",
    "I feel like im supposed to be loading something...",
    "Kicking the router.",
  ]);
  const [mssgNum, setMssgNum] = useState(0);
  const [showMssg, setShowMssg] = useState(false);

  function randomMssg() {
    const length = mssg.length;
    setMssgNum(Math.floor(Math.random() * length));
  }

  // onMount
  useEffect(() => {
    randomMssg();
    setShowMssg(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // onStateUpdate and onMount
  useEffect(() => {
    !isSiteReady
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isSiteReady]);

  return (
    <section className={styles.fullscreenPreloader}>
      <p
        className={`${styles.fullscreenPreloader__title} ${
          !showMssg ? styles["fullscreenPreloader__title--hide"] : null
        }`}
      >
        {mssg[mssgNum]}
      </p>

      <div className={styles.fullscreenPreloader__preloader}>
        <div></div>
      </div>
    </section>
  );
}
