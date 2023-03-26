// React imports
import { useEffect, useState } from "react";

// Next imports
import Image from "next/image";

// Styles
import styles from "/styles/portfolio/v1.module.scss";

export default function PortfolioItems({
  childSlideData,
  basicPortfolioContent,
}) {
  useEffect(() => {
    childSlideData(basicPortfolioContent);
  }, [basicPortfolioContent, childSlideData]);

  const [portfolioContent, setPortfolioContent] = useState(
    basicPortfolioContent
  );

  // Filters (from contentful)
  /// empty array for filters
  const dupeFilters = [];
  /// loop through portfolioContent and push to dupeFilters
  for (let i = 0; i < portfolioContent.length; i++) {
    dupeFilters.push(portfolioContent[i].tools);
  }
  /// remove dupes (...new Set()) and put in alphabetical order (.sort())
  const [filters, setFilters] = useState([
    ...new Set(dupeFilters.flat().sort()),
  ]);

  // Active Filters
  let [activeFilter, setActiveFilter] = useState([]);
  /// change filters
  function activeFilterHandler(filter) {
    if (!activeFilter.find((element) => element === filter.toLowerCase())) {
      // push to activeFilter const for filter btns
      // activeFilter.push(filter.toLowerCase());
      setActiveFilter((current) => [...current, filter.toLowerCase()]);
      // give me ALL objects that do NOT have the filter
      // change === -1 to !== -1 for opposite effect
      const filteredPortfolio = portfolioContent.filter(
        (item) => item.tools.indexOf(filter) === -1
      );
      // disable anchors (controlled by sass)
      filteredPortfolio.forEach((item) => {
        item.display = false;
      });
    } else {
      // remove deactivated filter from activeFilter array
      const removeSingleFilter = activeFilter.filter(
        (element) => element !== filter.toLowerCase()
      );
      // activeFilter = removeSingleFilter;
      setActiveFilter((current) => (current = removeSingleFilter));
      // give me ALL objects that DO have the filter
      // change === -1 to !== -1 for opposite effect
      const filteredPortfolio = portfolioContent.filter(
        (item) => item.tools.indexOf(filter) === -1
      );
      // enable anchors (controlled by sass)
      filteredPortfolio.forEach((item) => {
        item.display = true;
      });
    }
  }
  /// change symbol next to filter text
  function isFilterActiveIcon(filter) {
    return activeFilter.find((element) => element === filter.toLowerCase())
      ? "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDQ4IDcxLjljLTE3LjMtMTMuNC00MS41LTkuMy01NC4xIDkuMUwyMTQgMzQ0LjJsLTk5LjEtMTA3LjNjLTE0LjYtMTYuNi0zOS4xLTE3LjQtNTQuNy0xLjgtMTUuNiAxNS41LTE2LjQgNDEuNi0xLjcgNTguMSAwIDAgMTIwLjQgMTMzLjYgMTM3LjcgMTQ3IDE3LjMgMTMuNCA0MS41IDkuMyA1NC4xLTkuMWwyMDYuMy0zMDEuN2MxMi42LTE4LjUgOC43LTQ0LjItOC42LTU3LjV6IiBmaWxsPSIjMzEyNjViIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4="
      : "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTEzLjcgMTkuNTUgNS44OC01Ljg5IDMuMzUgMy4zNmEzLjU3IDMuNTcgMCAwIDEgMCA1LjA1bC0uODMuODNhMy41NyAzLjU3IDAgMCAxLTUuMDUgMHpNMjIuOTIgMS45bC0uODMtLjgzYTMuNTcgMy41NyAwIDAgMC01LjA1IDBMMTIgNi4xMiA2Ljk1IDEuMDdhMy41NyAzLjU3IDAgMCAwLTUuMDUgMGwtLjgzLjgzYTMuNTcgMy41NyAwIDAgMCAwIDUuMDVMNi4xMiAxMmwtNS4wNSA1LjA1YTMuNTcgMy41NyAwIDAgMCAwIDUuMDVsLjgzLjgzYTMuNTcgMy41NyAwIDAgMCA1LjA1IDBMMTIgMTcuODhsMy42OC0zLjY4IDIuMi0yLjIgNS4wNS01LjA1YTMuNTcgMy41NyAwIDAgMCAwLTUuMDV6IiBmaWxsPSIjMzEyNjViIiBjbGFzcz0iZmlsbC0wMDAwMDAiPjwvcGF0aD48L3N2Zz4=";
  }
  /// change class of filter button
  function isFilterActiveClass(filter) {
    return activeFilter.find((element) => element === filter.toLowerCase())
      ? `${styles["portfolio__filters-item"]} ${styles["portfolio__filters-item--active"]}`
      : `${styles["portfolio__filters-item"]}`;
  }

  return (
    <>
      <div className={styles.portfolio__filters}>
        {filters.map((item) => {
          return (
            <button
              key={item}
              onClick={() => activeFilterHandler(item)}
              className={isFilterActiveClass(item)}
            >
              {item.toLowerCase()}
              <Image
                className={styles["portfolio__filters-item-icon"]}
                src={isFilterActiveIcon(item)}
                alt="Filter Icon"
                width="27"
                height="27"
                loading="lazy"
                decoding="async"
              />
            </button>
          );
        })}
      </div>
      <div className={styles.portfolio__row}>
        {portfolioContent.map((item) => {
          return (
            <a
              href={item.url}
              className={
                item.display
                  ? `${styles["portfolio__row-item"]} ${styles["portfolio__row-item--active"]}`
                  : `${styles["portfolio__row-item"]}`
              }
              target="_blank"
              rel="noreferrer"
              key={item.id}
            >
              <Image
                src={item.image.url}
                alt={item.title}
                width={610}
                height={458}
                className={styles["portfolio__row-item-img"]}
              />
              <p className={styles["portfolio__row-item-title"]}>
                {item.title.toLowerCase()}
              </p>
              <p className={styles["portfolio__row-item-tools"]}>
                {/* Loop inside a loop */}
                {item.tools.map((tool) => {
                  return (
                    <span
                      key={tool}
                      className={
                        tool.toLowerCase() === "active"
                          ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--active"]}`
                          : tool.toLowerCase() === "coming soon"
                          ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--comingsoon"]}`
                          : tool.toLowerCase() === "wordpress"
                          ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--wordpress"]}`
                          : tool.toLowerCase() === "e-comm"
                          ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--ecomm"]}`
                          : tool.toLowerCase() === "vue/nuxt"
                          ? `${styles["portfolio__row-item-tools-inner"]} ${styles["portfolio__row-item-tools-inner--vuenuxt"]}`
                          : styles["portfolio__row-item-tools-inner"]
                      }
                    >
                      {tool.toLowerCase()}
                    </span>
                  );
                })}
              </p>
            </a>
          );
        })}
      </div>
    </>
  );
}
