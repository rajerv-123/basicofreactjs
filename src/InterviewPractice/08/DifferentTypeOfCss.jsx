import React, { useState } from "react";
import "./DifferentTypeOfCss";

const styles = {
  internal: {
    color: "blue",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
};

const DifferentTypeOfCss = () => {

  const [theme, setTheme] = useState(false);
  const toggleThese = () => {
    setTheme(!theme);
  };


  return (
    <div style={theme ? styles.light : styles.dark}>
      <h1 className="external">External Styling</h1>

      <h1>Internal Styling</h1>

      <h1
        style={
          theme
            ? { color: "black", backgroundColor: "white" }
            : { color: "white", backgroundColor: "black" }
        }
      >
        Inline Css
      </h1>

      <button onClick={toggleThese}>Toggle theme</button>
    </div>
  );
};

export default DifferentTypeOfCss;
