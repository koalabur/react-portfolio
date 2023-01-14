// React imports
import { useContext, useState } from "react";

// Cloudinary import
import { CldImage } from "next-cloudinary";

// Context
import { AppContext } from "../../../context/GlobalState";

// Hook
import { useGetCol } from "../../../hooks/useGetFirestore";

// Styles
import styles from "/styles/portfolio/v1.module.scss";

export default function PortfolioItems() {
  const { slide } = useContext(AppContext);
  const [portfolioData, setPortfolioData] = useState([]);

  useGetCol("portfolio", setPortfolioData);

  return (
    <div className={styles["portfolio__row-carousel"]}>
      {portfolioData.map((item, index) => {
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
            <CldImage
              src={item.img.src}
              alt={item.img.alt}
              width={800}
              height={600}
              className={styles["portfolio__row-item-img"]}
            />
            <p className={styles["portfolio__row-item-title"]}>{item.title}</p>
            <p className={styles["portfolio__row-item-tools"]}>
              {/* Loop inside a loop */}
              {item.tools.map((tool) => {
                return (
                  <span
                    key={tool}
                    className={
                      tool === "active"
                        ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--active"]}`
                        : tool === "coming soon"
                        ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--comingsoon"]}`
                        : styles["portfolio__row-item-tools-inner"]
                    }
                  >
                    {tool}
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
