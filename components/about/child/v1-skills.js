import styles from "/styles/about/v1.module.scss";

// Loops through about items from parent
export default function AboutItems(props) {
    return (
        <p className={styles["about__skills-item"]}>{props.item}</p>
    )
}