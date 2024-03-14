import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const PropsInReact = (props) => {
  const [name, setName] = useState("Rajeev");
  const data = { name: "rajeev", age: "24", location: "Bangalore" };

  function changeName() {
    setName("Nikita");
  }

  return (
    <div>
      {name}
      <ChildComponent data={data} changeName={changeName} />
    </div>
  );
};

export default PropsInReact;
