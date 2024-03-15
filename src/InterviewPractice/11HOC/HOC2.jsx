import React from "react";
import HigherOrderFuc from "./HigherOrderFuc";
function HOC2() {
  const HocComponentWithFetch = HigherOrderFuc("HOC");
  return (
    <div>
      <div>
        <div>
          <HocComponentWithFetch />
        </div>
      </div>
    </div>
  );
}

export default HOC2;
