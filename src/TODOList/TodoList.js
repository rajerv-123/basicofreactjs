import { useState } from "react";

export default function Todo() {
  const [inputText, setInputText] = useState([]);
  const [data, setData] = useState("");

  const handleInput = (e) => {
    setInputText(e.trget.value);
  };

  const handleClick = () => {
    setInputText([...inputText, data]);
    setData("");
  };

  return (
    <div className="App">
      <label htmlFor="">Enter somthing </label>
      <input type="text" onChange={handleInput} value={data} />

      <button onClick={handleClick}>Click Me</button>

      <ul>
        {inputText.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
