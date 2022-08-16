import React from "react";
import Clock from "./Components/Clock.js";
import Vaxt from "./Components/Date";
import Welcome from "./Components/welcome";
import Login from "./Components/Login";
//import AddFood from "./Components/addFood";
//import DataTable from "./Components/MealTable";
import MenuEkle from "./Components/MenuEkle/MenuEkle";
import EkleFood from "./Components/FoodEkle/addFood";
import MenuTable from "./Components/MenuTablo/MenuTable";
import TestAxios from "./Components/MenuEkle/testAxios";

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
      {/* <DataTable /> */}
      <MenuTable />
      <br></br>
      <TestAxios />
      <MenuEkle />
      <EkleFood />
      {/* <AddFood yeniYemekEklendi={handleOnYeniYemekEklendi} /> */}
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
