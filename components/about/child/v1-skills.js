import { useState, useEffect } from "react";

import { db } from "/firebase.config.js";
import { collection, getDocs } from "firebase/firestore";

import styles from "/styles/about/v1.module.scss";

// Loops through about items from parent
export default function AboutItems() {
    const [skillsData, setSkillsData] = useState([]);
    const skillsDb = collection(db, "skills");

    useEffect(() => {
        const getSkills = async () => {
            try {
                const data = await getDocs(skillsDb);
                const newData = data.docs.map((doc) => ({ ...doc.data() }));
                setSkillsData(newData[0].items);
            } catch {
                console.warn("Data couldn't be fetched from firebase");
            }
        };

        getSkills();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Do the loop thing
    const skillsItems = skillsData.map((item) => {
        return (
            <p className={styles["about__skills-item"]} key={item}>
                {item}
            </p>
        );
    });

    return <>{skillsItems}</>;
}
