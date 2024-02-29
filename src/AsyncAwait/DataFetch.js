import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function DataFetch() {
  const [mappedData, setMappedData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const response = await fetch(url);
        // By using axios
        // const response = await axios.get(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // const data = response.data;
        console.log(data);
        setMappedData(data);
      } catch (error) {
        console.log("error fetching");
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {mappedData?.map((data) => (
        <ul key={data.id}>
          <li>User Id{data?.userId}</li>
          <li>Body{data?.body}</li>
          <li>Title{data?.title}</li>
        </ul>
      ))}
    </div>
  );
}

export default DataFetch;
