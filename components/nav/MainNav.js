// React
import { useContext, useState } from "react";

// Styles
import styles from "/styles/nav/v1.module.scss";

// Context
import { AppContext } from "../../context/GlobalState";

export default function MainNav({ navLinks: navData }) {
  // Global state
  const { section } = useContext(AppContext);

  // Local state
  const [navLinks, setNavLinks] = useState(navData.data.nav.link);

  function active(activeSection) {
    if (section === activeSection) {
      return styles.siteNav__link + " " + styles["siteNav__link--active"];
    } else {
      return styles.siteNav__link;
    }
  }
  return (
    <nav className={styles.siteNav}>
      {navLinks.map((link) => {
        return (
          <a key={link} className={active(`${link}`)} href={`#${link}`}>
            {link}
          </a>
        );
      })}
    </nav>
  );
}
