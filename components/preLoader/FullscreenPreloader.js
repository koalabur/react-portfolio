// React
import { useEffect, useContext, useState } from "react";

// Styles
import styles from "/styles/preLoader/fullscreenPreloader.module.scss";

// Context
import { AppContext } from "../../context/GlobalState";

export default function PreLoader() {
  // Global State
  const { isSiteReady } = useContext(AppContext);

  // Local State
  const [mssg, setMssg] = useState([
    "Loading site...",
    "Removing stains...",
    "I'm building the building as fast as I can build it.",
    "99.999999999% complete...",
    "Doing a live NPM install, 1 sec.",
    "I promise my other loading screen is much faster.",
    "I feel like im supposed to be loading something...",
    "Kicking the router so the site loads.",
  ]);
  const [mssgNum, setMssgNum] = useState(0);

  function randomMssg() {
    const length = mssg.length;
    setMssgNum(Math.floor(Math.random() * length));
  }

  // onMount
  useEffect(() => {
    randomMssg();
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
      <p className={styles.fullscreenPreloader__title}>{mssg[mssgNum]}</p>
      <div className={styles.fullscreenPreloader__preloader}>
        <div></div>
      </div>
    </section>
  );
}
