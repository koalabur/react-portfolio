// Styles
import styles from "/styles/projects/tech/v1.module.scss";

export default function PrejectsView({ tech }) {
  function techStyling() {
    switch (tech) {
      case "Contentful":
        return `${styles.tech} ${styles["tech--contentful"]}`;
      case "Ecomm":
        return `${styles.tech} ${styles["tech--ecomm"]}`;
      case "GSAP":
        return `${styles.tech} ${styles["tech--gsap"]}`;
      case "React/Next":
        return `${styles.tech} ${styles["tech--react"]}`;
      case "Storyblok":
        return `${styles.tech} ${styles["tech--storyblok"]}`;
      case "Vue/Nuxt":
        return `${styles.tech} ${styles["tech--vue"]}`;
      case "WordPress":
        return `${styles.tech} ${styles["tech--wordpress"]}`;
      default:
        return styles.tech;
    }
  }

  return <p className={techStyling()}>{tech}</p>;
}
