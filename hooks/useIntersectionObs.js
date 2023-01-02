import { useEffect } from "react";

export function useInterObs(sectionRef, setState, threshold) {
  // On Mount
  useEffect(() => {
    // Create observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Give me ALL entries in observer
        entries.forEach((entry) => {
          // Timeout to prevent flickering when state updates
          setTimeout(() => {
            setState(entry.isIntersecting ? sectionRef.current.id : "");
          }, 350);
        });
      },
      {
        //* Needs to be handled by each component to handle
        //* sections not registering properly
        // 0 (0%) - 1 (100%) of element that needs to be in view before
        // observer.observe is triggered
        threshold,
      }
    );

    // Init observer
    observer.observe(sectionRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
