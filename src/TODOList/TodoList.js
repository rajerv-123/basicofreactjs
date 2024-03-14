import { useState } from "react";

export default function Todo() {
  const [taksh, setTaksh] = useState([]);

  const [forinput, setForinput] = useState("");

  function handleAddOneInput(e) {
    setForinput(e.target.value);
  }

  function handleSubmit() {
    setTaksh([...taksh, forinput]);
    setForinput("");
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={forinput} placeholder="enter your name" onChange={handleAddOneInput} />
        <button onClick={handleSubmit}>Submit</button>
        <ul>
          {taksh.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
