import Image from "next/image";

// Styles
import styles from "/styles/projects/card/v1.module.scss";

// Child Components
import Tech from "./Tech";

export default function Card({ project, dataForModal }) {
  return (
    <div
      className={styles["card"]}
      style={{
        "--card-border-color": "#" + project.projectColorTheme,
      }}
      onClick={() => dataForModal(project)}
    >
      <span className={styles["card__border"]}></span>
      <span className={styles["card__border"]}></span>
      <div
        className={styles["card__hero"]}
        style={{
          alignItems:
            project.imagePosition === "Top"
              ? "flex-start"
              : project.imagePosition === "Bottom"
              ? "flex-end"
              : "center",
          background: "#" + project.projectColorTheme,
        }}
      >
        <Image
          src={project.image.url}
          alt={project.image.title}
          width={project.image.width}
          height={project.image.height}
          className={styles["card__hero-img"]}
        />
      </div>
      <div className={styles["card__tech"]}>
        {project.tech.map((item) => {
          return <Tech key={item} tech={item} />;
        })}
      </div>
      <h3 className={styles["card__title"]}>{project.title}</h3>
      <p className={styles["card__cta"]}>tell me more about {project.title}</p>
    </div>
  );
}
