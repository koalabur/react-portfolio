import { useEffect } from "react";

export function useInterObs(sectionRef, setState) {
  // On Mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTimeout(() => {
            setState(entry.isIntersecting ? sectionRef.current.id : "");
          }, 350);
        });
        //! If only 1 entry
        // const entry = entries[0];
        // // Will grab id of element and send to state
        // setState(entry.isIntersecting ? sectionRef.current.id : "");
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(sectionRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
