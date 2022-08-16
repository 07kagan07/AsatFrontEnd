import { Grid } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setYemekGonder } from "../../Slices/addFoodSlice";
import { getAutoComplateFoods } from "./getAutoComplateFoods";
//datePicker
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import trLocale from "date-fns/locale/tr";
import isWeekend from "date-fns/isWeekend";

import { setMenuGonder } from "../../Slices/addMenuSlice";
const axios = require("axios").default;

export default function menu() {
  //----------AutoComplate--------------

  const [Yemekler, setYemekler] = useState([]);

  const durumFood = useSelector((state) => state.addFood.yemekGonderildiMi);
  const dispatch = useDispatch();

  const yemekListele = () => {
    getAutoComplateFoods()
      .then(function(response) {
        // handle success
        setYemekler(response.data);
      })
      .catch(function(error) {
        // handle error
        //console.log(error);
      });
  };

  useEffect(() => {
    durumFood && yemekListele();
    dispatch(setYemekGonder(false));
  }, [durumFood]);

  const [selectValues, setSelectValues] = useState([]);
  //console.log(selectValues);
  const getValues = (e, selections) => {
    setSelectValues(selections.map((q) => q.id));
  };

  //----------AutoComplate--------------
  //----------DatePicker--------------

  const [value, setValue] = useState(new Date().toISOString().substring(0, 10));

  const handleChange = (newValue) => {
    setValue(new Date(newValue).toISOString().substring(0, 10));
  };

  // useEffect(() => {
  //   getDateId();
  // }, [value]);
  //----------------button2----------------

  const onKaydet = () => {
    let day = new Date(value).toLocaleDateString("tr-Tr", {
      weekday: "long",
    });

    //console.log(new Date(value).toISOString().substring(0, 10));

    axios
      .post(process.env.REACT_APP_LOCAL_IP + "/date/add", {
        meal_date: value,
        meal_day: day,
      })
      .then(function(response) {
        setDateId(response.data.id);

        ////console.log("Response Data=> ", response.data.id);
      })
      .catch(function(error) {
        getDateId();
      });
  };

  const [dateId, setDateId] = useState();

  useEffect(() => {
    //console.log("date id değişti");
    yazdir();
    //getFoodByDate();
  }, [dateId]);

  const yazdir = () => {
    selectValues.map((id) =>
      axios
        .post(process.env.REACT_APP_LOCAL_IP + "/meal/add", {
          foodId: id,
          meal_id: dateId,
        })
        .then(function(response) {
          //console.log(response);
          dispatch(setMenuGonder(true));
        })
        .catch(function(error) {
          //console.log(error);
        })
    );
  };

  const getDateId = () => {
    axios
      .post(process.env.REACT_APP_LOCAL_IP + "/date/find", {
        meal_date: value,
      })
      .then(function(response) {
        setDateId(response.data.id);
        //console.log("Response Data=> ", response.data.id);
      })
      .catch(function(error) {
        //console.log(error.data);
      });
  };

  const [defaultOption, setDefaultOption] = useState([]);

  const getFoodByDate = () => {
    //console.log(dateId);

    axios
      .post(process.env.REACT_APP_LOCAL_IP + "/meal/find", {
        meal_id: dateId,
      })
      .then(function(response) {
        //(response.data.map((e) => e.foodId));
        // response.data.map((e) =>
        //   axios
        //     .post(process.env.REACT_APP_LOCAL_IP + "/food/find", {
        //       id: e.foodId,
        //     })
        //     .then(function(res) {
        //       //console.log("FOoods=>", res.data);
        //     })
        // );
      });
  };
  const [dateidstate, setDateIdState] = useState(true);
  const [dateidstatename, setDateIdStatename] = useState("Kapalı");

  const setState = () => {
    setDateIdState(dateidstate ? false : true);
    setDateIdStatename(dateidstate ? "Date ID Getir" : "Kapalı");
  };
  //console.log("Default Option=>", defaultOption);
  //console.log("SelectValues=>", selectValues);

  return (
    <Grid container spacing={2} className="py-2">
      <Grid item xs={3}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={trLocale}
        >
          <Stack spacing={2}>
            <MobileDatePicker
              label="Menü Tarihi"
              inputFormat="yyyy-MM-dd" //"dd/MM/yyyy"
              shouldDisableDate={isWeekend}
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={7}>
        <div>
          {Yemekler.length > 0 && (
            <Autocomplete
              multiple
              limitTags={3}
              // renderValue={handleChange}
              id="multiple-limit-tags"
              options={Yemekler}
              getOptionLabel={(option) => option.food}
              onChange={getValues}
              // defaultValue={[ymkler]}
              key={(option) => option.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Yemek Seçimi Yapınız"
                  placeholder=""
                />
              )}
              // sx={{ width: "600px" }}
            />
          )}
        </div>
      </Grid>
      <Grid item xs={2}>
        <button onClick={onKaydet} className="btn btn-primary ">
          Kaydet
        </button>
        <input
          onClick={getDateId}
          className="btn btn-outline-info"
          type="submit"
          disabled={dateidstate}
          value={dateidstatename}
        ></input>
      </Grid>

      <button onClick={setState} className="btn btn-danger">
        Aktifleştir
      </button>
    </Grid>
  );
}

// const [menu, setMenu] = React.useState();
//   const [falseYemek, setYeniYemek] = React.useState();
//   const handleOnTarihChanged = (newValue) => {
//     setMenu({ ...menu, tarih: newValue });
//   };
//   const handleOnYemeklerChanged = (yemekListe) => {
//     setMenu({ ...menu, yemekListe: yemekListe });
//   };
//   const handleOnYeniYemekEklendiMi = (deger) => {
//     setYeniYemek(false);
