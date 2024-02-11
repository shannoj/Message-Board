import { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState<Array<[]>>();

  useEffect(() => {
    axios.get("http://localhost:5000").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
    // Simulate a long-running loop that blocks the event loop
  return (
    <div>
      {data ? <p>{Array.isArray(data) ? data[0].text : data}</p> : <p>Loading data...</p>}
    </div>
  );

}

export default MyComponent;
