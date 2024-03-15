import React, { useEffect, useState } from "react";
import axios from "axios";

const Axious = () => {
  const [data, setData] = useState("");
  const [showData, setShowData] = useState([]);

  const postData = () => {
    axios
      .post(`https://65f3e53d105614e654a15ece.mockapi.io/users`, {
        name: data,
        age: "24",
        hobbies: "coding",
        technicalSkill: ["JavaScript", "Reactjs", "SQL", "MongoDb"],
      })
      .then((res) => {
        console.log(res);
        getAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Patch || update

  const updateData = (id) => {
    console.log(id);
    axios
      .put(`https://65f3e53d105614e654a15ece.mockapi.io/users/${id}`, {
        name: data,
        age: "27",
        hobbies: "coding",
        technicalSkill: ["JavaScript", "Reactjs", "SQL", "Nextjs"],
      })
      .then((res) => {
        console.log(res);
        getAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // GetMethod

  const getAPI = () => {
    axios
      .get(`https://65f3e53d105614e654a15ece.mockapi.io/users`)
      .then((res) => {
        setShowData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAPI();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://65f3e53d105614e654a15ece.mockapi.io/users/${id}`)
      .then((res) => {
        getAPI();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <input placeholder="name" onChange={(e) => setData(e.target.value)} />
        <button onClick={postData}>Post Data</button>
 
        <div>
          {showData.map((data, index) => {
            return (
              <h1 key={index}>
                {data.id}
                {"."} {data.name}
                <br />
                <button onClick={() => updateData(data.id)}>Update</button>
                <button onClick={() => handleDelete(data.id)}>Delete</button>
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Axious;
