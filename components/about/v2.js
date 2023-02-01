// React imports
import {
  useState,
  useRef,
  useContext,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import { useInView } from "react-intersection-observer";

// Next imports
import Image from "next/image";

// Context
import { AppContext } from "../../context/GlobalState";

// Hooks
import { useGetCol, useGetDoc } from "../../hooks/useGetFirestore";

// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Style import
import styles from "/styles/about/v2.module.scss";

export default function AboutSection() {
  // Global state
  const { setSection, setIsSiteReady } = useContext(AppContext);

  // Local state
  const [aboutData, setAboutData] = useState([]);
  const [reactCode, setReactCode] = useState([]);
  const [reactConcepts, setReactConcepts] = useState([]);
  const [reactOther, setReactOther] = useState([]);

  // Styling for about loop
  const normalImage = styles["about__col-highlights-item-img"];
  const rotateImage = styles["about__col-highlights-item-img--rotate"];

  // Get data from firestore
  useGetCol("about", setAboutData);
  useGetDoc("skills", "react-code", setReactCode);
  useGetDoc("skills", "react-concepts", setReactConcepts);
  useGetDoc("skills", "react-other", setReactOther);

  // Create refs for elements
  const aboutRef = useRef(null);
  const scrollTrigA = useRef(null);
  const scrollTrigB = useRef(null);
  const scrollTrigC = useRef(null);
  const scrollTrigD = useRef(null);

  // When #about section is active, send to global state
  const { ref: inViewRef, inView: aboutRefIsVisible } = useInView({
    threshold: 0.05,
    rootMargin: "-50px",
  });

  // Use `useCallback` so we don't recreate the function on each render
  const setAboutRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      aboutRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  // If visible then send ID to global setSection
  useEffect(() => {
    aboutRefIsVisible ? setSection(aboutRef.current.id) : setSection("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutRefIsVisible]);

  useLayoutEffect(() => {
    // Remove preloader once rendering is complete
    setTimeout(() => {
      setIsSiteReady(true);
    }, 100);

    // https://greensock.com/react/#context
    // TLDR: Needed for react cleanup
    let ctx = gsap.context(() => {
      // Put refs in array then loop through all and add the same effects
      const scrollTrig = [
        scrollTrigA.current,
        scrollTrigB.current,
        scrollTrigC.current,
        scrollTrigD.current,
      ];

      scrollTrig.forEach((section) => {
        // console.log(section.childNodes[1]);
        gsap.from(
          [
            // Title
            section.childNodes[0].childNodes[0].childNodes[0],
            // Line
            section.childNodes[0].childNodes[0].childNodes[1].childNodes[0],
            // Dot
            section.childNodes[0].childNodes[0].childNodes[1].childNodes[1],
            // Right Column
            section.childNodes[1],
          ],
          {
            opacity: 0,
            xPercent: -100,
            ease: "expo.out",
            stagger: 0.8,
            scrollTrigger: {
              trigger: section,
              scrub: 1,
              pin: true,
              start: "top top",
              end: "bottom",
            },
          }
        );
      });
    }, aboutRef);
    return () => ctx.revert(); // cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="about" className={styles.about} ref={setAboutRefs}>
      <div className={styles.about__offset}></div>
      <div>
        <div className={styles.about__row} ref={scrollTrigA}>
          <div className={styles.about__col}>
            <div className={styles["about__col-row"]}>
              {/* aboutData */}
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    who am i?
                  </span>
                  &lt;h1/&#62;
                </h1>
              </div>
              <div className={styles["about__col-divider"]}>
                <div className={styles["about__col-divider-line"]}></div>
                <div className={styles["about__col-divider-dot"]}></div>
              </div>
            </div>
          </div>
          <div className={styles.about__col}>
            <h2 className={styles["about__col-subtitle"]}>
              my name is{" "}
              <strong>
                <u>cameron</u>
              </strong>
              , i am a
              <strong>
                {" "}
                <u>front end dev</u>{" "}
              </strong>
              who likes...
            </h2>
            <div className={styles["about__col-highlights"]}>
              {aboutData.map((about) => {
                return (
                  <div
                    className={styles["about__col-highlights-item"]}
                    key={about.id}
                  >
                    <Image
                      src={about.icon.img}
                      alt={about.icon.alt}
                      width={about.icon.width}
                      height={about.icon.height}
                      className={
                        about.id === 4
                          ? normalImage + " " + rotateImage
                          : normalImage
                      }
                    />
                    <h3 className={styles["about__col-highlights-item-title"]}>
                      {about.title}
                    </h3>
                    <p
                      className={styles["about__col-highlights-item-subtitle"]}
                    >
                      {about.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* reactCode */}
        <div className={styles.about__row} ref={scrollTrigB}>
          <div className={styles.about__col}>
            <div className={styles["about__col-row"]}>
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    i know cool codey things like
                  </span>
                  &lt;h1/&#62;
                </h1>
              </div>
              <div className={styles["about__col-divider"]}>
                <div className={styles["about__col-divider-line"]}></div>
                <div className={styles["about__col-divider-dot"]}></div>
              </div>
            </div>
          </div>
          <div className={styles.about__col}>
            <div className={styles["about__col-skills"]}>
              {reactCode.length === 0
                ? null
                : reactCode.items.map((skill) => {
                    return (
                      <p
                        className={styles["about__col-skills-item"]}
                        key={skill}
                      >
                        {skill}
                      </p>
                    );
                  })}
            </div>
          </div>
        </div>

        {/* reactConcepts */}
        <div className={styles.about__row} ref={scrollTrigC}>
          <div className={styles.about__col}>
            <div className={styles["about__col-row"]}>
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    i know cool concepts and libraries like
                  </span>
                  &lt;h1/&#62;
                </h1>
              </div>
              <div className={styles["about__col-divider"]}>
                <div className={styles["about__col-divider-line"]}></div>
                <div className={styles["about__col-divider-dot"]}></div>
              </div>
            </div>
          </div>
          <div className={styles.about__col}>
            <div className={styles["about__col-skills"]}>
              {reactConcepts.length === 0
                ? null
                : reactConcepts.items.map((skill) => {
                    return (
                      <p
                        className={styles["about__col-skills-item"]}
                        key={skill}
                      >
                        {skill}
                      </p>
                    );
                  })}
            </div>
          </div>
        </div>
        {/* reactOther */}
        <div className={styles.about__row} ref={scrollTrigD}>
          <div className={styles.about__col}>
            <div className={styles["about__col-row"]}>
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    i know other cool things like
                  </span>
                  &lt;h1/&#62;
                </h1>
              </div>
              <div className={styles["about__col-divider"]}>
                <div className={styles["about__col-divider-line"]}></div>
                <div className={styles["about__col-divider-dot"]}></div>
              </div>
            </div>
          </div>
          <div className={styles.about__col}>
            <div className={styles["about__col-skills"]}>
              {reactOther.length === 0
                ? null
                : reactOther.items.map((skill) => {
                    return (
                      <p
                        className={styles["about__col-skills-item"]}
                        key={skill}
                      >
                        {skill}
                      </p>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
