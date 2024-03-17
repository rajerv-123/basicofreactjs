import React, { useEffect, useState } from "react";
import { getUsers } from "./CreatingHelperFunction";
import { addTwoNumber } from "./AddTwoNumber";

const UsingHelperfunction = () => {
  const [showData, setShowData] = useState([]);
  const getUsersHelper = async () => {
    let data = await getUsers();
    console.log(data);
    setShowData(data);
  };

  useEffect(() => {
    getUsersHelper();
  }, []);

  const addTheTwoNumbers = () => {
    let sum = addTwoNumber(50, 6180);
    console.log(sum);
  };

  return (
    <div>
      <ul>
        {showData.map((data, index) => (
          <li key={index}>{data.name}</li>
        ))}
      </ul>

      <button onClick={addTheTwoNumbers}>Add</button>
    </div>
  );
};

export default UsingHelperfunction;
