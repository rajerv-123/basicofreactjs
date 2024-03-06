import React, { useContext } from "react";
import ContextApi from "./ContextApi";

function Home() {
  const a = useContext(ContextApi);
  return <div>this is my Name : {a.Name}</div>;
}

export default Home;
