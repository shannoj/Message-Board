import React, { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? <p>{data}</p> : <p>Loading data...</p>}</div>;
}

export default MyComponent;
