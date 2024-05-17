import { useEffect, useRef } from "react";

// Styles
import styles from "/styles/ui/wobbleText/v1.module.scss";

export default function WobbleText({ text: propText }) {
  const wobbleText = useRef(null);

  useEffect(() => {
    const text = propText;
    const words = text.split(" ");
    const textCode = words
      .map((word) => {
        const letters = Array.from(word);
        const wordWithSpans = letters
          .map((letter, idx) => {
            let delay = (idx + 1) * 50;
            return `<span style="animation-delay: ${delay}ms">${letter}</span>`;
          })
          .join("");
        return wordWithSpans;
      })
      .join(" ");
    wobbleText.current.innerHTML = textCode;
  }, []);

  return (
    <p className={styles["wobble-text"]} ref={wobbleText}>
      {propText}
    </p>
  );
}
