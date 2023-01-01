// React
import { useState, useEffect } from "react";

// Next
import Image from "next/image";

// Style
import styles from "/styles/sidebar/v2.module.scss";

// Data
import { portfolios, socials } from "/data/sidebar/v2";

export default function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(true);

  function sidebarToggle() {
    setSidebarActive((prevState) => !prevState);
  }

  const sidebarAnim = {
    transition: sidebarActive
      ? "all 0.75s ease-in-out"
      : "all 0.15s ease-in-out",
    opacity: sidebarActive ? "1" : "0",
    visibility: sidebarActive ? "visible" : "hidden",
  };

  // onMount, do the thing
  useEffect(() => {
    setTimeout(() => {
      window.innerWidth < 1024 ? setSidebarActive(false) : null;
    }, 500);
  }, []);

  return (
    <aside
      className={
        sidebarActive
          ? styles.sidebar
          : styles.sidebar + " " + styles["sidebar--inactive"]
      }
    >
      {/* Sidebar Toggle  */}
      <Image
        onClick={sidebarToggle}
        className={styles.sidebar__close}
        style={{
          transform: sidebarActive ? "rotate(-90deg)" : "rotate(90deg)",
        }}
        src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTYuNjkzIDU2LjY5MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC45OTUgMzMuMzgzaDE5LjUyM2wuMDAxIDQuMTEzdjUuMjk2YTIuMTUgMi4xNSAwIDAgMCAuMTE3LjY3MWMuMDQ0LjEzMy4xLjI1OS4xNjYuMzc5LjAyMS4wMzcuMDM3LjA3NC4wNi4xMDguMDg0LjEzMy4xOC4yNTkuMjkuMzcuMDEuMDA5LjAyMS4wMTQuMDMxLjAyMi4xNS4xNDcuMzIzLjI3Ni41MTcuMzc1YTIuMTU5IDIuMTU5IDAgMCAwIDIuMjUyLS4xNzZsMTkuOS0xNC40NTVhMi4xNjQgMi4xNjQgMCAwIDAgMC0zLjQ5OEwzMS45NTEgMTIuMTM0YTIuMTQ4IDIuMTQ4IDAgMCAwLTEuMzYyLS4zOTNoLS4wMDNjLS4xNDQuMDA4LS4yODYuMDItLjQyNi4wNTdhMS44MyAxLjgzIDAgMCAwLS40NjIuMTU4IDIuMTY1IDIuMTY1IDAgMCAwLTEuMTggMS45MjhsLjAwMSA5LjQwOEg4Ljk5NmE1LjA0NCA1LjA0NCAwIDAgMC01LjA0NSA1LjA0NyA1LjA0NCA1LjA0NCAwIDAgMCA1LjA0NCA1LjA0NHoiIGZpbGw9IiNkMGQ1ZjIiIGNsYXNzPSJmaWxsLTQ3NGE1NiI+PC9wYXRoPjwvc3ZnPg=="
        alt="sidebar toggle"
        width="50"
        height="50"
        title={sidebarActive ? "Close Sidebar" : "Open Sidebar"}
      />
      <div style={sidebarAnim}>
        {/* Loop through portfolios */}
        <p className={styles.sidebar__title}>portfolios</p>
        {portfolios.map((item) => {
          return (
            <div className={styles.sidebar__item} key={item.id}>
              <a
                className={`${styles["sidebar__item-link"]} 
                ${styles["sidebar__item-link" + "--" + item.icon.alt]}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles["sidebar__item-link-icon"]}
                  src={item.icon.src}
                  alt={item.icon.alt}
                  title={item.icon.alt + " portfolio"}
                  width={25}
                  height={25}
                />
              </a>
              <p className={styles["sidebar__item-title"]}>{item.icon.alt}</p>
            </div>
          );
        })}

        {/* Loop through socials */}
        <p className={styles.sidebar__title}>socials</p>
        {socials.map((item) => {
          return (
            <div className={styles.sidebar__item} key={item.id}>
              <a
                className={`${styles["sidebar__item-link"]}
                 ${styles["sidebar__item-link" + "--" + item.icon.alt]}`}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles["sidebar__item-link-icon"]}
                  src={item.icon.src}
                  alt={item.icon.alt}
                  title={item.icon.alt + " portfolio"}
                  width={25}
                  height={25}
                />
              </a>
              <p className={styles["sidebar__item-title"]}>{item.icon.alt}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
