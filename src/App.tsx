import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import MyComponent from "./Component";

//data will be the string we send from our server
const apiCall = () => {
  axios.get("http://localhost:5000").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent></MyComponent>
        <button onClick={apiCall}>Make API Call</button>
      </header>
    </div>
  );
}

export default App;
