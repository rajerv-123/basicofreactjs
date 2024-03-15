import React, { useState } from "react";
import "../06/InputField.css";

const DynamicInputs = () => {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formData]);
    setFormData({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Year of experience"
            name="exp"
            value={formData.exp}
            onChange={handleChange}
          />
          <button type="submit" className="form-button">
            Submit
          </button>
        </div>
      </form>

      <div>
        {data.map((item, index) => (
          <ol key={index}>
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.exp}</li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default DynamicInputs;
