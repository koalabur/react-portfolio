import { useState, useEffect } from "react";

// Axios
import axios from "axios";

import styles from "/styles/about/v1.module.scss";

// Loops through about items from parent
export default function AboutItems() {
    const [skillsData, setSkillsData] = useState([]);

    const getSkillsData = async () => {
        await axios
            // Get the goods
            .get(
                "https://portfolio-96dd5-default-rtdb.firebaseio.com/skills.json"
            )
            .then((res) => {
                // Organize values from least to greatest
                let resData = Object.entries(res.data)
                    .sort((a, b) => a[1] - b[1])
                    // Items were put inside another array. Need to take them out
                    .map((item) => item[0]);

                // Keys and values were flipped when sorting from least to greatest
                // ex. Firebase: key: html, value: 1
                // ex. Here: key: 1, value: html
                setSkillsData(Object.values(resData));
            })
            .catch((error) => console.log(error));
    };

    // For the love of everything keep the useEffect hook
    // this will run until the end of time and blow up the internet w/o it
    useEffect(() => {
        getSkillsData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Do the loop thing
    const skillsItems = skillsData.map((item, index) => {
        return (
            <p className={styles["about__skills-item"]} key={index}>
                {item}
            </p>
        );
    });

    return <>{skillsItems}</>;
}
