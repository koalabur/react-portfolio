// React
import { useContext } from "react";
// Styles
import styles from "/styles/nav/v1.module.scss";

// Context
import { AppContext } from "../../context/GlobalState";

export default function v1() {
  // Global state
  const { section } = useContext(AppContext);

  function active(activeSection) {
    if (section === activeSection) {
      return styles.siteNav__link + " " + styles["siteNav__link--active"];
    } else {
      return styles.siteNav__link;
    }
  }
  return (
    <nav className={styles.siteNav}>
      <a className={active("about")} href="#about">
        about
      </a>
      <a className={active("portfolio")} href="#portfolio">
        portfolio
      </a>
    </nav>
  );
}
