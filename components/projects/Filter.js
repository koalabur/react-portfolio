import { useEffect, useState } from "react";

// Styles
import styles from "/styles/projects/filter/v1.module.scss";

export default function Filter({ techUsed, filter }) {
  // Remove dupes from techUsed
  const uniqueTech = [...new Set(techUsed)];

  /// Remove certain tech from the filter
  function filteredTechUsed() {
    return uniqueTech.filter(
      (item) =>
        item !== "GSAP" &&
        item !== "Contentful" &&
        item !== "Side Project" &&
        item !== "Storyblok"
    );
  }

  const [filters, setFilters] = useState(filteredTechUsed());

  function activeFilter(item) {
    return filters.includes(item)
      ? `${styles["filter__btn"]} ${styles["filter__btn--active"]}`
      : `${styles["filter__btn"]}`;
  }

  function toggleFilter(item) {
    if (filters.includes(item)) {
      const filteredData = filters.filter((filter) => filter !== item);
      setFilters(filteredData);
    } else {
      setFilters((prevState) => [...prevState, item]);
    }
  }

  useEffect(() => {
    filter(filters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className={styles["filter"]}>
      {filteredTechUsed().map((tech) => {
        return (
          <button
            type="button"
            key={tech}
            className={activeFilter(tech)}
            onClick={() => {
              toggleFilter(tech);
            }}
          >
            <svg
              className={styles["filter__btn-icon"]}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 100 100"
            >
              <path
                d="M5268.4 2410.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1h-4.3zM5272.7 2413.7h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1s-.4-1-1-1zM5272.7 2417h-4.3c-.6 0-1 .4-1 1s.4 1 1 1h4.3c.6 0 1-.4 1-1 0-.5-.4-1-1-1zM86.8 39.3H60.7V13.2c0-5.9-4.8-10.7-10.7-10.7-5.9 0-10.7 4.8-10.7 10.7v26.1H13.2C7.3 39.3 2.5 44.1 2.5 50s4.8 10.7 10.7 10.7h26.1v26.1c0 5.9 4.8 10.7 10.7 10.7 5.9 0 10.7-4.8 10.7-10.7V60.7h26.1c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.7-10.7z"
                fill="#1c1240"
              ></path>
            </svg>
            {tech}
          </button>
        );
      })}
    </div>
  );
}
