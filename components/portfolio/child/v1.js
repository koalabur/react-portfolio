import { useContext } from "react"
import Image from "next/image";

// Context
import { CurrentSlideContext } from "../context/v1";

// Data
import portfolio from "/data/portfolio/v1.js";

// Styles
import styles from "/styles/portfolio/v1.module.scss";

export default function PortfolioItems() {
    const { current } = useContext(CurrentSlideContext)

    return (
        <div className={styles["portfolio__row-carousel"]}>
            {portfolio.map((item, index) => {
                return (
                    // Loop through PortfolioItems component
                    <a
                        href={item.url}
                        // if index of mapped array is same as current slide from context then show active slide
                        // else hide non-active slides
                        className={index === current ? `${styles["portfolio__row-item"]} ${styles["portfolio__row-item--active"]}` : styles["portfolio__row-item"]}
                        target="_blank"
                        rel="noreferrer"
                        key={item.id}
                    >
                        <Image
                            src={`/img/${item.img.src}`}
                            alt={item.img.alt}
                            width={800}
                            height={600}
                            className={styles["portfolio__row-item-img"]}
                        />
                        <p className={styles["portfolio__row-item-title"]}>{item.title}</p>
                        <p className={styles["portfolio__row-item-tools"]}>
                            <span className={styles["portfolio__row-item-tools-inner"]}>{item.tools}</span>
                        </p>
                    </a>
                );
            })}
        </div>
    );
}
