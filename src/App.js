import React from "react";
//import "./App.css";
import Table from "./Components/Table";
import Clock from "./Components/Clock.js";
import Vaxt from "./Components/Date";
import Welcome from "./Components/welcome";
import Login from "./Components/Login";

const App = () => {
  return (
    <div className="container">
      <div className="App">
        <Welcome />
        <div>
          <h4 className="text-end" style={{ marginRight: "2rem" }}>
            <Vaxt />
          </h4>
        </div>
        <h3 className="text-end" style={{ marginRight: "2rem" }}>
          <Clock />
        </h3>
      </div>
      <br></br>
      <Table />
      <br></br>
      <Login />
    </div>
  );
};
export default App;

// <div className="d-grid gap-2 col-3 mx-auto">
//         <button className="btn btn-primary" type="button">
//           REZERVASYON YAP
//         </button>
//       </div>
