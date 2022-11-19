import Image from "next/image";

// Style
import styles from "/styles/externalLinks/v1.module.scss";

// Data
import data from "/data/externalLinks/v1";

export default function ExternalLinks() {
    return (
        <div className={styles.externalLinks}>
            <p className={styles.externalLinks__text}>other <br />portfolios</p>
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
                            ${styles["externalLinks__link"]} ${styles["externalLinks__link" + "-" + item.icon.alt ]}
                        `}
                    >
                        <Image
                            className={styles["externalLinks__link-icon"]}
                            src={item.icon.src}
                            alt={item.icon.alt}
                            width={25}
                            height={25}
                        />
                    </a>
                );
            })}
        </div>
    );
}
