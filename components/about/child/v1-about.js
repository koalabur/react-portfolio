import Image from "next/image";

import styles from "/styles/about/v1.module.scss";

// Use this for last (4th) image of loop
const normalImage = styles["about__highlights-col-img"]
const rotateImage = styles["about__highlights-col-img--rotate"];

// Loops through about items from parent
export default function AboutItems(props) {
    return (
        <div className={styles["about__highlights-col"]}>
            <Image
                src={`${props.item.icon.img}`}
                alt={props.item.icon.alt}
                width={props.item.icon.width}
                height={props.item.icon.height}
                className={props.item.id === 4 ? normalImage + " " + rotateImage : normalImage}
            />
            <h3 className={styles["about__highlights-col-title"]}>{props.item.title}</h3>
            <p className={styles["about__highlights-col-subtitle"]}>{props.item.desc}</p>
        </div>
    )
}