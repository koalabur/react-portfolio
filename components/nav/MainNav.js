// React
import { useContext, useState, useEffect } from "react";

// Preloader
import BasicPreloader from "../preLoader/BasicPrelaoder";

// Hook
import useContentful from "../../hooks/useContentful";

// Styles
import styles from "/styles/nav/v1.module.scss";

// Context
import { AppContext } from "../../context/GlobalState";

export default function MainNav() {
  // Global state
  const { section } = useContext(AppContext);

  const query = `
    query navEntryQuery {
      nav(id: "3JoFznXXx6b4rrvIx9UKqk") {
        link
      }
    }
  `;

  const { data } = useContentful(query);

  function active(activeSection) {
    if (section === activeSection) {
      return styles.siteNav__link + " " + styles["siteNav__link--active"];
    } else {
      return styles.siteNav__link;
    }
  }
  return (
    <nav className={styles.siteNav}>
      {data ? (
        data.nav.link.map((item) => {
          return (
            <a key={item} className={active(`${item}`)} href={`#${item}`}>
              {item}
            </a>
          );
        })
      ) : (
        <BasicPreloader />
      )}
    </nav>
  );
}
