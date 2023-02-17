// React imports
import {
  useRef,
  useContext,
  useLayoutEffect,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";

// Next imports
import Image from "next/image";

// Context
import { AppContext } from "../../context/GlobalState";

// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Style import
import styles from "/styles/about/v2.module.scss";

export default function AboutSection({
  whoAmIData,
  codeyThingsData,
  coolConceptsData,
  coolThingsData,
}) {
  // Global state
  const { setSection } = useContext(AppContext);

  // Local state
  /// whoAmI
  const [whoAmI, setwhoAmI] = useState(whoAmIData);
  /// codeyThings
  const [codeyThings, setcodeyThings] = useState(codeyThingsData);
  /// coolConcepts
  const [coolConcepts, setCoolConcepts] = useState(coolConceptsData);
  /// coolThings
  const [coolThings, setcoolThings] = useState(coolThingsData);

  // Styling for about loop
  const normalImage = styles["about__col-highlights-item-img"];
  const rotateImage = styles["about__col-highlights-item-img--rotate"];

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
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    {whoAmI.title}
                  </span>
                  &lt;/h1&#62;
                </h1>
              </div>
              <div className={styles["about__col-divider"]}>
                <div className={styles["about__col-divider-line"]}></div>
                <div className={styles["about__col-divider-dot"]}></div>
              </div>
            </div>
          </div>
          <div className={styles.about__col}>
            <h2 className={styles["about__col-subtitle"]}>{whoAmI.subtitle}</h2>
            <div className={styles["about__col-highlights"]}>
              {whoAmI.contentInJsonFormat.map((item) => {
                return (
                  <div
                    className={styles["about__col-highlights-item"]}
                    key={item.id}
                  >
                    <Image
                      src={item.base64img}
                      alt={item.title}
                      width={101}
                      height={101}
                      className={
                        item.id === 4
                          ? normalImage + " " + rotateImage
                          : normalImage
                      }
                    />
                    <h3 className={styles["about__col-highlights-item-title"]}>
                      {item.title}
                    </h3>
                    <p
                      className={styles["about__col-highlights-item-subtitle"]}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.about__row} ref={scrollTrigB}>
          <div className={styles.about__col}>
            <div className={styles["about__col-row"]}>
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    {codeyThings.title}
                  </span>
                  &lt;/h1&#62;
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
              {codeyThings.contentInListFormat.map((codey) => {
                return (
                  <p className={styles["about__col-skills-item"]} key={codey}>
                    {codey}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.about__row} ref={scrollTrigC}>
          <div className={styles.about__col}>
            <div className={styles["about__col-row"]}>
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    {coolConcepts.title}
                  </span>
                  &lt;/h1&#62;
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
              {coolConcepts.contentInListFormat.map((concept) => {
                return (
                  <p className={styles["about__col-skills-item"]} key={concept}>
                    {concept}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.about__row} ref={scrollTrigD}>
          <div className={styles.about__col}>
            <div className={styles["about__col-row"]}>
              <div className={styles["about__col-title"]}>
                <h1 className={styles["about__col-title-text"]}>
                  &lt;h1&#62;
                  <span className={styles["about__col-title-text-indent"]}>
                    {coolThings.title}
                  </span>
                  &lt;/h1&#62;
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
              {coolThings.contentInListFormat.map((thing) => {
                return (
                  <p className={styles["about__col-skills-item"]} key={thing}>
                    {thing}
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
