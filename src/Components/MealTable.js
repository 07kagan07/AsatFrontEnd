import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const axios = require("axios").default;
const columns = [
  { field: "meal_day", headerName: "Gün", width: 130 },
  { field: "meal_date", headerName: "Tarih", width: 130 },
  {
    field: "yemekListe",
    headerName: "Menü",
    width: 500,
  },
  //   {
  //     field: 'fullName',
  //     headerName: 'Full name',
  //     type: 'number',
  //     width: 60,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   },
];

export default function DataTable() {
  const [Menu, setMenu] = useState([]);

  const menuListele = () => {
    axios
      .get(process.env.REACT_APP_LOCAL_IP + "/meal")
      .then(function(response) {
        // handle success
        const a = response.data.map((q) => {
          return q.meal;
        });
        for (let i = 0; i < a.length; i++) {
          let yemekliste = "";
          for (let j = 0; j < a[i].length; j++) {
            yemekliste = yemekliste.concat(a[i][j].foodRelation.food + ", ");
          }
          response.data[i].yemekListe = yemekliste;
        }
        response.data.forEach((item) => {
          item.meal_date = new Date(item.meal_date).toLocaleDateString("tr");
        });
        setMenu(response.data);
        console.log("All Data => ", response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    menuListele();
  }, []);

  //const foods = Menu.map((q) => q.meal.map((x) => x.foodRelation));
  return (
    <div className="col-md-12" style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={Menu}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
}

// const a = response.data.map(q=> {return q.meal})
// for(const i=0;i<a.length;i++)
//     {
//         const yemekliste="";
//         for(const j=0;j<a[i].length;j++)
//             {
//                 yemekliste =yemekliste.concat(a[i][j].foodRelation.food+", ")

//             }
//         response.data[i].yemekListe = yemekliste
//     }
