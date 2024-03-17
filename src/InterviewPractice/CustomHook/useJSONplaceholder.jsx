import React, { useState } from "react";
import { useEffect } from "react";

const useJSONplaceholder = () => {
  const [users, setUsers] = useState([]);
  const [post, setPosts] = useState([]);

  useEffect(() => {
    getUsers();
    getPost();
  }, []);

  const getUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  return { users, post };
};

export default useJSONplaceholder;
