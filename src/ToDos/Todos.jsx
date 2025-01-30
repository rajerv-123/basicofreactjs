import React, { useState } from "react";

function Todos() {
  const [inputData, setInputData] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleOnChange(e) {
    setInputData(e.target.value);
  }

  console.log("input data is --->", inputData);

  function onButtonClick() {
    setTodoList([...todoList, inputData]);
    setInputData("");
  }

  console.log("todoList--->", todoList);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "20%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <input
          type="text"
          value={inputData}
          placeholder="Enter Something here..."
          onChange={handleOnChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <button onClick={onButtonClick}>Click Me</button>
      </div>

      <div>
        <ul>
          {todoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
