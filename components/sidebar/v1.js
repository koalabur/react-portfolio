import Image from "next/image";

// Style
import styles from "/styles/sidebar/v1.module.scss";

// Data
import data from "/data/sidebar/v1";

export default function sidebar() {
    return (
        <aside className={styles.sidebar}>
            <p className={styles.sidebar__text}>other <br />portfolios</p>
            {data.map((item) => {
                return (
                    <a
                        href={item.url}
                        key={item.id}
                        target="_blank"
                        rel="noreferrer"
                        // Append the alt tag from mapped data and keep
                        // the id generated from the module
                        className={`
                            ${styles["sidebar__link"]} ${styles["sidebar__link" + "-" + item.icon.alt ]}
                        `}
                    >
                        <Image
                            className={styles["sidebar__link-icon"]}
                            src={item.icon.src}
                            alt={item.icon.alt}
                            width={25}
                            height={25}
                        />
                    </a>
                );
            })}
        </aside>
    );
}
