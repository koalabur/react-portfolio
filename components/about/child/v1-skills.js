// React
import { useState } from "react";

// Hook
import { useGetDoc } from "../../../hooks/useGetFirestore";

// Styles
import styles from "/styles/about/v1.module.scss";

// Loops through about items from parent
export default function AboutItems() {
  const [skillsData, setSkillsData] = useState([]);

  useGetDoc("skills", "CJgN52ThCOph1d71Skt6", setSkillsData);

  if (skillsData.length === 0) {
    return;
  } else {
    // Do the loop thing
    const skillsItems = skillsData.items.map((item) => {
      return (
        <p className={styles["about__skills-item"]} key={item}>
          {item}
        </p>
      );
    });

    return <>{skillsItems}</>;
  }
}
