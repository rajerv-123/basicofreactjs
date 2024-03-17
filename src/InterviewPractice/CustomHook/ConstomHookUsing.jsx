import React from "react";
import useData from "./useJSONplaceholder";

const CustomHookUsing = () => {
  let { users, post } = useData();
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Users</h1>

      {users.map((data, index) => {
        return <h1 key={index}>{data?.name}</h1>;
      })}

      <h1>Posts</h1>
      {post.slice(0, 5).map((data, index) => {
        return <h1 key={index}>{data?.title}</h1>;
      })}
    </div>
  );
};

export default CustomHookUsing;
