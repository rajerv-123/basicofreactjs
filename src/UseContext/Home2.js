import React, { useContext } from "react";
import ContextApi from "./ContextApi";

function Home2() {
  const contextData = useContext(ContextApi);

  return (
    <div>Context data is comming in the second child : {contextData.Name}</div>
  );
}

export default Home2;
