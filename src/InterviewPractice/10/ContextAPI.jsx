import React, { useContext } from "react";
import { contextState } from "./CreateContext";

const ContextAPI = () => {
  const { data } = useContext(contextState);
  console.log(data);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default ContextAPI;
