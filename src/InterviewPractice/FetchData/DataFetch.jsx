import React, { useEffect, useState } from "react";
import "./DataFetch.css";

const DataFetchs = () => {
  const [user, setUser] = useState([]);
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // by using fetch()
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((json) => setUser(json))
  //       .catch(() => {
  //         console.error("Error fetching data");
  //       });
  //   }, []);

  // by using async await

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://jsonplaceholder.typicode.com/users`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch {
        console.log(object);
      }
    }
    fetchData();
  }, []);

  const mapData = () => {
    // let filteredData = user.filter((user) => {
    //   return user.id > 5 || user.address.city === "Gwenborough";
    // });
    // setUser(filteredData);
    // let numberLessThen5 = number
    //   .filter((number) => {
    //     return number >= 5;
    //   })
    //   .map((filtered) => {
    //     return filtered * filtered;
    //   });
    // setNumber(numberLessThen5);
  };

  return (
    <div className="container">
      <h1 className="title">User Data</h1>
      <div className="main-div">
        {user.map((data, index) => (
          <div className="card" key={index}>
            <h2 className="name">{data.name}</h2>
            <p className="username">@{data.username}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className="main-div">
        {number.map((number, index) => (
          <div className="card" key={index}>
            <p>{number}</p>
          </div>
        ))}
      </div>
      <button className="filter-btn" onClick={mapData}>
        Filter
      </button>
    </div>
  );
};

export default DataFetchs;
