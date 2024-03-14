import React, { useState } from "react";
import "./InputField.css";

const InputFields = () => {
  const [objData, setObjData] = useState({});
  const [data, setData] = useState([]);

  const getInput = (value, name) => {
    const newData = { [name]: value };
    setObjData({ ...objData, ...newData });
  };

  const submit = (event) => {
    event.preventDefault();
    setData([...data, objData]);
    setObjData({}); // Clear objData after submitting
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <input
            type="text"
            name="hobbies"
            placeholder="Hobbies"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <input
            type="date"
            name="Date"
            placeholder="Write a date"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <button type="submit" className="form-button">
            Submit
          </button>
        </div>
      </form>
      <div>
        {data.map((item, index) => (
          <ul key={index}>
            <li>Name: {item.name}</li>
            <li>Age: {item.age}</li>
            <li>Hobbies: {item.hobbies}</li>
            <li>Date: {item.Date}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default InputFields;
