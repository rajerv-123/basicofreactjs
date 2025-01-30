import React, { useState } from "react";

const InputField1 = () => {
  const [inputField, setInputField] = useState({});
  const [data, setData] = useState([]);

  const getInput = (value, name) => {
    const newData = { [name]: value };
    setInputField({ ...inputField, ...newData });
  };

  const submit = (e) => {
    e.preventDefault();
    setData([...data, inputField]);
    setInputField({});
  };
  
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <input
            type="text"
            placeholder="enter your address"
            name="address"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <input
            type="number"
            placeholder="enter your age"
            name="age"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <input
            type="date"
            placeholder="Your Skills"
            name="skill"
            onChange={(event) =>
              getInput(event.target.value, event.target.name)
            }
          />
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        {data.map((value, index) => (
          <ul key={index}>
            <li>{value.name}</li>
            <li>{value.age}</li>
            <li>{value.address}</li>
            <li>{value.skill}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default InputField1;
