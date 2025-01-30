import React from "react";
import { useState } from "react";

const HandleInput = () => {
  const [inputValues, setInputValues] = React.useState({
    name: "",
    address: "",
    permanentAddress: "",
    contactNumber: "",
  });
  const [error, setError] = useState({});
  const [data, setData] = React.useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!inputValues.name.trim()) {
      newErrors.name = "Name should not contain numbers";
    }
    if (!inputValues.address.trim()) {
      newErrors.address = "Address should not be empty";
    }
    if (!inputValues.permanentAddress.trim()) {
      newErrors.permanentAddress = "Permanent Address should not be empty";
    }
    if (!inputValues.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number should not be empty";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length > 0) {
      setError(validateError);
    } else {
      setError({});
      console.log("error", inputValues);
    }
  };
  console.log(data);

  return (
    <div
      style={{
        width: "450px",
        height: "100%",
        borderRadius: "2px solid #0075BA",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={inputValues.name}
          onChange={handleChange}
          placeholder="Enter your name"
          //   required
        />
        {error.name && <span style={{ color: "red" }}>{error.name}</span>}

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={inputValues.address}
          onChange={handleChange}
          placeholder="Enter your address"
          //   required
        />
        {error.address && <span style={{ color: "red" }}>{error.address}</span>}

        <label htmlFor="permanentAddress">Permanent Address</label>
        <input
          type="text"
          name="permanentAddress"
          value={inputValues.permanentAddress}
          onChange={handleChange}
          placeholder="Permanent Address"
          //   required
        />
        {error.permanentAddress && (
          <span style={{ color: "red" }}>{error.address}</span>
        )}

        <label htmlFor="contactNumber">Number</label>
        <input
          type="number"
          name="contactNumber"
          value={inputValues.contactNumber}
          onChange={handleChange}
          placeholder="Enter your name"
          //   required
        />
        {error.contactNumber && (
          <span style={{ color: "red" }}>{error.contactNumber}</span>
        )}
        <button type="submit" style={{ marginTop: "20px" }}>
          Submit
        </button>
      </form>

      <hr />

      <ol>
        {/* {inputValues.map((data, index) => ( */}
        <li>
          <span>{inputValues.name}</span>
        </li>
        <li>
          {" "}
          <span>{inputValues.address}</span>
        </li>
        <li>
          <span>{inputValues.permanentAddress}</span>
        </li>
        <li>
          <span>{inputValues.contactNumber}</span>
        </li>
        {/* ))} */}

        <tr>
          <tr>{inputValues.name}</tr>
        </tr>
      </ol>
    </div>
  );
};

export default HandleInput;
