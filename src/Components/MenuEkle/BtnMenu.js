import React from "react";

const btnMenu = (props) => {
  const onClick = () => {
    console.log("seçilen değerler => ", props.menu);
    let day = new Date(props.menu.tarih).toLocaleDateString("tr-Tr", {
      weekday: "long",
    });
    const axios = require("axios").default;
    axios
      .post("http://localhost:3000/date/add", {
        meal_date: props.menu.tarih,
        meal_day: day,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    // axios.get("http://localhost:3000/date")
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    props.menu.yemekListe.map((id) =>
      axios
        .post("http://localhost:3000/meal/add", {
          foodId: id,
          meal_id: 3,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
    );

    window.location.replace("/");
  };
  return (
    <button onClick={onClick} className="btn btn-primary">
      Kaydet
    </button>
  );
};

export default btnMenu;
