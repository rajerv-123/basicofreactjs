import React, { useEffect, useState } from "react";
import "./Searchfilter.css";

const SearchFilter = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let timeoutId;
    if (searchQuery) {
      timeoutId = setTimeout(() => {
        const filteredData = data.filter((user) =>
          Object.values(user)
            .join("")
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );
        setSearched(filteredData);
      }, 1000);
    } else {
      setSearched([]);
    }
    return () => clearTimeout(timeoutId);
  }, [searchQuery, data]);

  return (
    <div className="app">
      <input
        onChange={(event) => setSearchQuery(event.target.value)}
        className="search"
        type="text"
        placeholder="search users"
      />

      <div className="grid-main">
        {searched.length > 0
          ? searched.map((user) => (
              <div key={user.id} className="grid-child">
                <h2>{user.name}</h2>
                <p>{user.username}</p>
              </div>
            ))
          : data.map((user) => (
              <div key={user.id} className="grid-child">
                <h2>{user.name}</h2>
                <p>{user.username}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default SearchFilter;
