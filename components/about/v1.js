// Next stuff
import Image from "next/image";

// Component import for looping
import AboutItems from "/components/about/child/v1-about.js";
import SkillsItems from "/components/about/child/v1-skills.js";

// Data import
import { about, skills } from "/data/about/v1.js";

// Style import
import styles from "/styles/about/v1.module.scss";

export default function AboutSection() {
    // Map and loop
    const aboutItems = about.map((item) => {
        return (
            // Loop through AboutItems component
            <AboutItems key={item.id} item={item} />
        );
    });

    const skillsItems = skills.map((item, index) => {
        return (
            // Loop through AboutItems component
            <SkillsItems key={index} item={item} />
        );
    });

    return (
        <section id="about" className={styles.about}>
            <div className={styles.about__title}>
                <h1 className={styles["about__title-text"]}>
                    &lt; who am i? /&#62;
                </h1>
                <div className={styles["about__title-divider"]}></div>
                <div>
                    <Image
                        className={styles["about__title-icon"]}
                        src="/img/mouse-icon.png"
                        alt="Mouse"
                        width={18}
                        height={18}
                    />
                    <Image
                        className={`${styles["about__title-icon"]} ${styles["about__title-icon--controller"]}`}
                        src="/img/controller-icon.png"
                        alt="Controller"
                        width={27}
                        height={18}
                    />
                </div>
            </div>
            <h2 className={styles.about__subtitle}>
                my name is <strong>cameron</strong>, i am a <strong>front end dev</strong> who likes...
            </h2>
            <div className={styles.about__highlights}>
                {/* Using aboutItems from map not component */}
                {aboutItems}
            </div>

            <div className={styles.about__divider}></div>

            <div className={styles.about__title}>
                <h1 className={styles["about__title-text"]}>
                    &lt; i know cool codey (and non codey) things like /&gt;
                </h1>
                <div className={styles["about__title-divider"]}></div>
                <div>
                    <Image
                        src="/img/bug-icon.png"
                        alt="Bug"
                        width={20}
                        height={18}
                        className={styles["about__title-icon"]}
                    />
                    <Image
                        src="/img/web-icon.png"
                        alt="Web"
                        width={34}
                        height={18}
                        className={styles["about__title-icon"] + " " + styles["about__title-icon--controller"]}
                    />
                </div>
            </div>
            <div className={styles["about__skills"]}>
                {/* Using skillsItems from map not component */}
                {skillsItems}
            </div>
        </section>
    );
}
