import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setYemekGonder } from "../../Slices/addFoodSlice";
import { getAutoComplateFoods } from "./getAutoComplateFoods";
//const axios = require("axios").default;
export default function AutoComplates() {
  const [Yemekler, setYemekler] = useState([]);

  const durum = useSelector((state) => state.addFood.yemekGonderildiMi);
  const dispatch = useDispatch();

  const yemekListele = () => {
    getAutoComplateFoods()
      .then(function(response) {
        // handle success
        setYemekler(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  console.log(durum);
  useEffect(() => {
    durum && yemekListele();
    dispatch(setYemekGonder(false));
  }, [durum]);

  // useEffect(() => {
  //   yemekListele();
  // }, []);

  const [selectValues, setSelectValues] = useState([]);
  // console.log(selectValues);
  const getValues = (e, selections) => {
    setSelectValues(selections.map((q) => q.id));
  };
  // const dbPush = () => {
  //   selectValues.map((id) =>
  //     axios
  //       .post("http://localhost:3000/meal/add", {
  //         foodId: id,
  //         meal_id: 3,
  //       })
  //       .then(function(response) {
  //         console.log(response);
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       })
  //   );
  //   // window.alert("Kaydedildi");

  //   window.location.replace("/");
  // };

  return (
    <div>
      <Autocomplete
        multiple
        limitTags={3}
        // renderValue={handleChange}
        id="multiple-limit-tags"
        options={Yemekler}
        getOptionLabel={(option) => option.food}
        onChange={getValues}
        key={(option) => option.id}
        renderInput={(params) => (
          <TextField {...params} label="Yemek Seçimi Yapınız" placeholder="" />
        )}
        // sx={{ width: "600px" }}
      />
    </div>
  );
}

/* <div className="col-md-3 py-2">
        <button onClick={dbPush} className="btn btn-primary">
          Kaydet
        </button>
      </div> */
