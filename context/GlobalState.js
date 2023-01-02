import { useState, createContext } from "react";

const AppContext = createContext({
  slide: '',
  setSlide: () => {},
  section: '',
  setSection: () => {},
});

const AppContextProvider = (props) => {
  const [slide, setSlide] = useState(0);
  const [section, setSection] = useState("");

  return (
    <AppContext.Provider value={{ slide, setSlide, section, setSection }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };


//* Usage

// Context
// import { AppContext } from "../../context/GlobalState";

// Global state 
// Use same way you would local state
// const { slide, setSlide, section, setSection } = useContext(AppContext);
