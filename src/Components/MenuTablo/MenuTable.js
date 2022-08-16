import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { useSelector, useDispatch } from "react-redux";
import { setMenuGonder } from "../../Slices/addMenuSlice";
const axios = require("axios").default;

const columns = [
  {
    name: "meal_day",
    label: "Gün",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "meal_date",
    label: "Tarih",
    options: {
      filter: true,
      sortOrder: false,
    },
  },
  {
    name: "yemekListe",
    label: "Menü",
    options: {
      filter: true,
      sort: false,
    },
  },
];

const options = {
  filterType: "checkbox",
  rowsPerPage: 5,
  rowsPerPageOptions: [],
  showResponsive: true,
  search: false,
  downloadCsv: false,
  print: false,
  viewColumns: false,
  filter: false,
  textLabels: {
    body: {
      noMatch: "Yemeğinin Hepsini Ben Yedim!!",
    },
  },
};

const menuTable = () => {
  const [Menu, setMenu] = useState([]);
  const durumMenu = useSelector((state) => state.addMenu.menuGonderildiMi);

  const dispatch = useDispatch();
  const menuListele = () => {
    axios
      .get("http://localhost:3000/meal")
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
        //console.log("All Data => ", response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    durumMenu && menuListele();
    dispatch(setMenuGonder(false));
    //console.log(durumMenu);
  }, [durumMenu]);

  return (
    <MUIDataTable
      title={"Yemek Tablosu"}
      data={Menu}
      columns={columns}
      options={options}
    />
  );
};

export default menuTable;
