import React from "react";
import HigherOrderFuc from "./HigherOrderFuc";

const Styles = {
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "grey",
  },
};

const HOC = () => {
  const HocComponentWithFetch = HigherOrderFuc("HOC");

  return (
    <div>
      <div style={Styles.mainDiv}>
        <HocComponentWithFetch />
      </div>
    </div>
  );
};

export default HOC;
