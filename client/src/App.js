import React from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import {DisplayData} from "./components/DisplayData";
import { GetUsers } from "./components/GetUsers";

function App() {
  return (
    <div className="container">
      <CreateUser />
      <hr />
      <div className="App">
        <div className="left-container">
          <GetUsers />
        </div>
        <div className="right-container">
          <DisplayData />
        </div>
      </div>
    </div>
  );
}

export default App;
