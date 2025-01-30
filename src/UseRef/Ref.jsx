import React, { useRef } from "react";
import Style from "./Style.css";
function Ref() {
  let demoRef = useRef();

  let btn = () => {
    demoRef.current.style.background = "red";
  };


  let submit = () => {
    demoRef.current.style.background = "pink";
  };

  return (
    <div id={Style.sty}>
      <h1 ref={demoRef}>hello</h1>
      <button onClick={btn}>Click me</button>
      <label htmlFor="Enter Your name">Name</label>
      <input type="text" />
      <label htmlFor="enter yout age">Age</label>
      <input type="age" />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Ref;
