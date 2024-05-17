import Image from "next/image";

// Styles
import styles from "/styles/projects/modal/v1.module.scss";

// Child Components
import ContentfulRichText from "./ContentfulRichText";
import ModalLink from "./ModalLink";

export default function Modal({ data, closeModal }) {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__content"]}>
        <svg
          className={styles["modal__content-close"]}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => closeModal()}
        >
          <path
            d="M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zm4.3 3.4h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zm0 3.3h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM86.8 39.3H60.7V13.2c0-5.9-4.8-10.7-10.7-10.7-5.9 0-10.7 4.8-10.7 10.7v26.1H13.2C7.3 39.3 2.5 44.1 2.5 50s4.8 10.7 10.7 10.7h26.1v26.1c0 5.9 4.8 10.7 10.7 10.7 5.9 0 10.7-4.8 10.7-10.7V60.7h26.1c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.7-10.7z"
            fill="#d0d5f2"
          />
        </svg>
        <div className={styles["modal__content-left"]}>
          <div
            className={styles["modal__content-left-hero"]}
            style={{
              alignItems:
                data.imagePosition === "Top"
                  ? "flex-start"
                  : data.imagePosition === "Bottom"
                  ? "flex-end"
                  : "center",
              background: "#" + data.projectColorTheme,
            }}
          >
            <Image
              src={data.image.url}
              alt={data.image.title}
              width={data.image.width}
              height={data.image.height}
              className={styles["modal__content-left-hero-img"]}
            />
          </div>
          <div className={styles["modal__content-left-tech"]}>
            <ModalLink link={data.websiteLink} linkType="website" />
            {data.githubLink && (
              <ModalLink link={data.githubLink} linkType="github" />
            )}
          </div>
        </div>
        <div className={styles["modal__content-right"]}>
          <p className={styles["modal__content-right-title"]}>
            About the <strong>{data.title}</strong> project
          </p>
          <ContentfulRichText data={data.projectDescription.json} />
        </div>
      </div>
    </div>
  );
}
