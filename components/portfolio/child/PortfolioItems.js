// React imports
import { useContext, useEffect } from "react";

// Next imports
import Image from "next/image";

// Context
import { AppContext } from "../../../context/GlobalState";

// Styles
import styles from "/styles/portfolio/v1.module.scss";

export default function PortfolioItems({
  childSlideData,
  basicPortfolioContent,
}) {
  // Global State
  const { slide } = useContext(AppContext);

  useEffect(() => {
    childSlideData(basicPortfolioContent);
  }, [basicPortfolioContent, childSlideData]);

  return (
    <div className={styles["portfolio__row-carousel"]}>
      {basicPortfolioContent.map((item, index) => {
        return (
          // Loop through PortfolioItems component
          <a
            href={item.url}
            // if index of mapped array is same as current slide from context then show active slide
            // else hide non-active slides
            className={
              index === slide
                ? `${styles["portfolio__row-item"]} ${styles["portfolio__row-item--active"]}`
                : styles["portfolio__row-item"]
            }
            target="_blank"
            rel="noreferrer"
            key={item.id}
          >
            <Image
              src={item.image.url}
              alt={item.title}
              width={800}
              height={600}
              className={styles["portfolio__row-item-img"]}
            />
            <p className={styles["portfolio__row-item-title"]}>
              {item.title.toLowerCase()}
            </p>
            <p className={styles["portfolio__row-item-tools"]}>
              {/* Loop inside a loop */}
              {item.tools.map((tool) => {
                return (
                  <span
                    key={tool}
                    className={
                      tool.toLowerCase() === "active"
                        ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--active"]}`
                        : tool.toLowerCase() === "coming soon"
                        ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--comingsoon"]}`
                        : tool.toLowerCase() === "wordpress"
                        ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--wordpress"]}`
                        : tool.toLowerCase() === "e-comm"
                        ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--ecomm"]}`
                        : styles["portfolio__row-item-tools-inner"]
                    }
                  >
                    {tool.toLowerCase()}
                  </span>
                );
              })}
            </p>
          </a>
        );
      })}
    </div>
  );
}
