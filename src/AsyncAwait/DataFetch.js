import React, { useEffect, useState } from "react";

function DataFetch() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setApiData(data);
    } catch {
      console.log("error fetching data");
    }
  }
  return (
    <div>
      {apiData?.map((data) => (
        <div key={data.id}>
          <ol>
            <li>title is : {data?.title}</li>
            <li>body is : {data?.body}</li>
            <li>User Id : {data?.userId}</li>
          </ol>
        </div>
      ))}
    </div>
  );
}

export default DataFetch;
