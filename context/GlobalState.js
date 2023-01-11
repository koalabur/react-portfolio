import { useState, createContext } from "react";

const AppContext = createContext({
  slide: "",
  setSlide: () => {},
  section: "",
  setSection: () => {},
  isSiteReady: "",
  setIsSiteReady: () => {},
});

const AppContextProvider = (props) => {
  const [slide, setSlide] = useState(0);
  const [section, setSection] = useState("");
  const [isSiteReady, setIsSiteReady] = useState(false);

  return (
    <AppContext.Provider
      value={{
        slide,
        setSlide,
        section,
        setSection,
        isSiteReady,
        setIsSiteReady,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };

//* Usage

// Context
// Imported at top of file
// import { AppContext } from "../../context/GlobalState";

// Global state
// Use same way you would local state
// const { slide, setSlide, section, setSection, isSiteReady, setIsSiteReady } = useContext(AppContext);
