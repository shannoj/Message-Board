import { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://localhost:5000").then((data) => {
      //this console.log will be in our frontend console
      setData(data.data);
    });
  }, []);

  return <div>{data ? <p>{data}</p> : <p>Loading data...</p>}</div>;
}

export default MyComponent;
