import React from "react";

const ChildComponent = ({ data, changeName }) => {
  console.log(data, "data comming from parent component");
  return (
    <div>
      <h1>{data?.age}</h1>
      <h1>{data?.name}</h1>
      <h1>{data?.location}</h1>

      <button onClick={changeName}>Click here</button>
    </div>
  );
};

export default ChildComponent;
