import { useEffect, useContext, useRef, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { useInView } from "react-intersection-observer";

// Context
import { AppContext } from "../../context/GlobalState";

// Styles
import styles from "/styles/projects/projectsView/v1.module.scss";

// Child Components
import Card from "./Card";
import Modal from "./Modal";
import Filter from "./Filter";
import WobbleText from "../ui/WobbleText";

export default function ProjectsView({ projects }) {
  // Global state
  const { setSection } = useContext(AppContext);

  const projectsRef = useRef(null);

  // When #about section is active, send to global state
  const { ref: inViewRef, inView: projectsRefIsVisible } = useInView({
    threshold: process.client ? (window.innerWidth <= 768 ? 0.35 : 0.55) : 0.55,
  });

  // Use `useCallback` so we don't recreate the function on each render
  const setProjectsRef = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      projectsRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  // If visible then send ID to global setSection
  useEffect(() => {
    projectsRefIsVisible ? setSection(projectsRef.current.id) : setSection("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsRefIsVisible]);

  const [modalData, setModalData] = useState(null);

  function dataForModalHandler(data) {
    setModalData(data);
  }

  function closeModal() {
    setModalData(null);
  }

  // Look into the tech array of every object and return everything
  const [unfilteredTech, setUnfilteredTech] = useState([]);

  projects.forEach((item) => {
    item.tech.forEach((string) => {
      unfilteredTech.push(string);
    });
  });

  // Compare filters with the contentful projects
  const [filteredProjects, setFilteredProjects] = useState(projects);

  function filterHandler(filter) {
    const matches = projects.filter((item) => {
      return item.tech.some((tech) => filter.includes(tech));
    });
    setFilteredProjects(matches);
  }

  return (
    <section
      id="projects"
      className={styles["projects-view"]}
      ref={setProjectsRef}
    >
      {modalData &&
        createPortal(
          <Modal data={modalData} closeModal={closeModal} />,
          document.body
        )}
      <h1 className={styles["projects-view__title"]}>{"< projects />"}</h1>
      <Filter techUsed={unfilteredTech} filter={filterHandler} />
      {filteredProjects.length !== 0 && (
        <div className={styles["projects-view__content"]}>
          {filteredProjects.map((item) => {
            return (
              <Card
                key={item.title}
                project={item}
                dataForModal={dataForModalHandler}
              />
            );
          })}
        </div>
      )}
      {filteredProjects.length === 0 && (
        <div className={styles["projects-view__content-notice"]}>
          <WobbleText text="Please select a filter" />
        </div>
      )}
    </section>
  );
}
