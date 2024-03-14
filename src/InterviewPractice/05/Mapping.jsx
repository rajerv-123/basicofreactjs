import React from "react";

const Mapping = () => {
  const arr = [
    {
      name: "Rajeev",
      age: "24",
      location: "Bangalore",
    },
    {
      name: "Mukesh",
      age: "24",
      location: "Pune",
    },
    {
      name: "Shivam",
      age: "24",
      location: "Goa",
    },
    {
      name: "Manish",
      age: "32",
      location: "Dhanbad",
    },
    {
      name: "Lulli",
      age: "28",
      location: "Hydrabad",
    },
    {
      name: "Bhulli",
      age: "14",
      location: "Lohore",
    },
  ];
  return (
    <div>
      <div>
        {arr.map((data, index) => (
          <ul key={index}>
            <li>{data.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Mapping;
