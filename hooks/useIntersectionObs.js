import { useEffect } from "react";

export function useInterObs(sectionRef, setState) {
  // On Mount
  useEffect(() => {
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        // Give me ALL entries in observer (current 2)
        entries.forEach((entry) => {
          // Timeout to prevent flickering when state updates
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
        // Mobile adjustments
        rootMargin: "-100px",
        threshold: 0,
      }
    );
    
    // Init observer
    observer.observe(sectionRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
