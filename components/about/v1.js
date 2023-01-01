// React imports
import { useState } from "react";

// Next imports
import Image from "next/image";

// Component import for looping
import AboutItems from "/components/about/child/v1-about.js";
import SkillsItems from "/components/about/child/v1-skills.js";

// Hook
import { useGetCol } from "../../hooks/useGetFirestore";

// Style import
import styles from "/styles/about/v1.module.scss";

export default function AboutSection() {
    const [aboutData, setAboutData] = useState([])

    useGetCol("about", setAboutData)

    // Map and loop
    const aboutItems = aboutData.map((item) => {
        return (
            // Loop through AboutItems component
            <AboutItems key={item.id} item={item} />
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
                        src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzg0IDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAzNTJjMCA4OC4zOCA3MS42MyAxNjAgMTYwIDE2MGg2NGM4OC4zOCAwIDE2MC03MS42MyAxNjAtMTYwVjIyNEgwdjEyOHpNMTc2IDBoLTE2QzcxLjYzIDAgMCA3MS42MiAwIDE2MHYzMmgxNzZWMHptNDggMGgtMTZ2MTkyaDE3NnYtMzJDMzg0IDcxLjYyIDMxMi40IDAgMjI0IDB6IiBmaWxsPSIjYWYyN2YyIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4="
                        alt="Mouse"
                        width={14}
                        height={18}
                    />
                    <Image
                        className={`${styles["about__title-icon"]} ${styles["about__title-icon--controller"]}`}
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDAgNTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQUYyN0YyO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA5LjcsOTguNWMtMjguOS0yOC4zLTk2LjQtMzkuNy0xMzQuNCwxQzM4LjEsMTM5LjMsOCwyMzUuMSw4LDMyNS40YzAsMTA5LDkxLjQsMTI0LjEsMTQxLjIsNzAuNg0KCWMyOC44LTMxLjEsMzEuNi0zNS45LDUwLjQtNjAuNWgxMDAuOGMxOSwyNC42LDIxLjYsMjkuNCw1MC40LDYwLjVjNDkuOCw1My41LDE0MS4yLDM4LjQsMTQxLjItNzAuNmMwLTkwLjMtMzAuMS0xODYuMS02Ny4zLTIyNS45DQoJYy0zOC00MC43LTEwNS40LTI5LjMtMTM0LjQtMWMtMTEuMiwxMC45LTQwLjMsMTUuMS00MC4zLDE1LjFTMjIwLjksMTA5LjQsMjA5LjcsOTguNXogTTE2OS4zLDE2NS4xdjI5LjJoMjkuMg0KCWMxMS43LDAsMjEuMiw5LjEsMjEuMiwyMC4yYzAsMTEuMS05LjUsMjAuMi0yMS4yLDIwLjJoLTI5LjJ2MjkuMmMwLDExLjctOS4xLDIxLjItMjAuMiwyMS4yYy0xMS4xLDAtMjAuMi05LjUtMjAuMi0yMS4ydi0yOS4ySDk5LjgNCgljLTExLjcsMC0yMS4yLTkuMS0yMS4yLTIwLjJjMC0xMS4xLDkuNS0yMC4yLDIxLjItMjAuMkgxMjl2LTI5LjJjMC0xMS43LDkuMS0yMS4yLDIwLjItMjEuMkMxNjAuMywxNDMuOSwxNjkuMywxNTMuNCwxNjkuMywxNjUuMXoNCgkgTTM1MC44LDE3OS4yYzAtMTMuOSwxMS4zLTI1LjIsMjUuMi0yNS4yYzEzLjksMCwyNS4yLDExLjMsMjUuMiwyNS4yYzAsMTMuOS0xMS4zLDI1LjItMjUuMiwyNS4yDQoJQzM2Mi4xLDIwNC40LDM1MC44LDE5My4xLDM1MC44LDE3OS4yeiBNMzAwLjQsMjM5LjdjMC0xMy45LDExLjMtMjUuMiwyNS4yLTI1LjJjMTMuOSwwLDI1LjIsMTEuMywyNS4yLDI1LjINCgljMCwxMy45LTExLjMsMjUuMi0yNS4yLDI1LjJDMzExLjcsMjY0LjksMzAwLjQsMjUzLjYsMzAwLjQsMjM5Ljd6Ii8+DQo8L3N2Zz4NCg=="
                        alt="Controller"
                        width={18}
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
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNBRjI3RjI7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01LjcsNmgxMi41Yy0wLjEtMC4yLTAuMi0wLjQtMC40LTAuNkwyMS4yLDJsLTEuNy0xLjdsLTMuNCwzLjRjLTAuMy0wLjItMC42LTAuNC0wLjktMC41Yy0yLTEuMS00LjUtMS4xLTYuNSwwDQoJQzguNCwzLjQsOC4xLDMuNSw3LjksMy43TDQuNCwwLjNMMi44LDJsMy40LDMuNEM2LDUuNiw1LjksNS44LDUuNyw2eiBNNC41LDguNEgwdjIuNGgyLjhjLTAuMSwwLjYtMC4xLDEuMi0wLjEsMS44DQoJYzAsMC42LDAuMSwxLjIsMC4xLDEuOEgwdjIuNGgzLjNjMCwwLDAsMC4xLDAsMC4xYzAuMiwwLjcsMC41LDEuMywwLjgsMS45QzQuMiwxOSw0LjMsMTksNC4zLDE5LjFsLTIuOCwyLjhsMS43LDEuN2wyLjUtMi41DQoJYzAuNywwLjgsMS41LDEuNCwyLjUsMS45YzAuNiwwLjMsMS4yLDAuNSwxLjgsMC43YzAuMiwwLjEsMC41LDAuMSwwLjcsMC4xdi03LjFoMi40djcuMWMwLjIsMCwwLjUtMC4xLDAuNy0wLjENCgljMC42LTAuMiwxLjItMC40LDEuOC0wLjdjMC42LTAuMywxLjEtMC43LDEuNi0xLjFjMC4zLTAuMywwLjYtMC42LDAuOS0wLjlsMi41LDIuNWwxLjctMS43bC0yLjgtMi44YzAuMS0wLjEsMC4xLTAuMiwwLjItMC4zDQoJYzAuMy0wLjYsMC42LTEuMywwLjgtMS45YzAsMCwwLTAuMSwwLTAuMUgyNHYtMi40aC0yLjhjMC4xLTAuNiwwLjEtMS4yLDAuMS0xLjhjMC0wLjYtMC4xLTEuMi0wLjEtMS44SDI0VjguNEg0LjV6Ii8+DQo8L3N2Zz4NCg=="
                        alt="Bug"
                        width={18}
                        height={18}
                        className={styles["about__title-icon"]}
                    />
                    <Image
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNy4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQUYyN0YyO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU2LDQuN0MxMTQuNiw0LjcsMCwxMjAsMCwyNjIuNGMwLDExMy44LDczLjMsMjEwLjQsMTc1LjEsMjQ0LjVjMTIuOCwyLjQsMTcuNS01LjYsMTcuNS0xMi40DQoJYzAtNi4xLTAuMi0yMi4zLTAuNC00My44QzEyMSw0NjYuMiwxMDYsNDE2LjEsMTA2LDQxNi4xYy0xMS42LTI5LjgtMjguNC0zNy43LTI4LjQtMzcuN2MtMjMuMy0xNiwxLjctMTUuNywxLjctMTUuNw0KCWMyNS43LDEuOCwzOS4yLDI2LjYsMzkuMiwyNi42YzIyLjgsMzkuNCw1OS45LDI4LDc0LjUsMjEuNGMyLjMtMTYuNyw4LjktMjgsMTYuMy0zNC41Yy01Ni44LTYuNS0xMTYuNi0yOC42LTExNi42LTEyNy40DQoJYzAtMjguMSwxMC01MS4xLDI2LjQtNjkuMmMtMi43LTYuNS0xMS40LTMyLjcsMi41LTY4LjJjMCwwLDIxLjUtNi45LDcwLjQsMjYuNGMyMC40LTUuNyw0Mi4zLTguNiw2NC4xLTguNw0KCWMyMS43LDAuMSw0My42LDIuOSw2NC4xLDguN2M0OC45LTMzLjMsNzAuMy0yNi40LDcwLjMtMjYuNGMxNCwzNS41LDUuMiw2MS43LDIuNiw2OC4yYzE2LjQsMTgsMjYuMyw0MSwyNi4zLDY5LjINCgljMCw5OS01OS44LDEyMC44LTExNi45LDEyNy4yYzkuMiw4LDE3LjQsMjMuNywxNy40LDQ3LjdjMCwzNC41LTAuMyw2Mi4yLTAuMyw3MC43YzAsNi45LDQuNiwxNC45LDE3LjYsMTIuNA0KCUM0MzguNyw0NzIuNyw1MTIsMzc2LjIsNTEyLDI2Mi40QzUxMiwxMjAsMzk3LjQsNC43LDI1Niw0LjdMMjU2LDQuN3oiLz4NCjwvc3ZnPg0K"
                        alt="Web"
                        width={18}
                        height={18}
                        className={styles["about__title-icon"] + " " + styles["about__title-icon--controller"]}
                    />
                </div>
            </div>
            <div className={styles["about__skills"]}>
                {/* Using skillsItems from map not component */}
                <SkillsItems />
            </div>
        </section>
    );
}
