import styles from "/styles/nav/v1.module.scss"

export default function v1() {
    return (
        <nav className={styles.siteNav}>
            <a className={styles.siteNav__link} href="#about">about</a>
            <a className={styles.siteNav__link} href="#portfolio">portfolio</a>
        </nav>
    )
}