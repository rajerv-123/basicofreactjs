import React, { useCallback, useEffect, useMemo } from "react";
import largeFile from "./LargeJSON.json";

function countLength(arr) {
  console.log("i am calculating  ");
  let count = 0;
  for (let i = 0; i < arr.length; i++) count++;
  return count;
}
function MyComponent(props) {
  const totalEntries = useMemo(() => countLength(largeFile), []);

  const handleOnWindowLoad = useCallback(() => {
    console.log("Loaded");
  }, []);

  useEffect(() => {
    window.addEventListener("load", handleOnWindowLoad);
    return () => {
      window.removeEventListener("Load", handleOnWindowLoad);
    };
  }, [props.state, handleOnWindowLoad]);

  return (
    <div>
      <h1>Hello from my component</h1>
      <h3>Total Entries {totalEntries}</h3>
      <h3>Count {props.state}</h3>
    </div>
  );
}

export default MyComponent;
