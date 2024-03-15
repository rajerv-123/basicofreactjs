import React, { useEffect, useState } from "react";

export default function HigherOrderFuc(name) {
  return function HOC() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);

    const getUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
}
