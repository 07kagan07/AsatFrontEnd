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

import Chip from "@mui/material/Chip";
const axios = require("axios").default;

const testAxios = () => {
  const [Foods, setFoods] = useState([]);
  const foodList = () => {
    axios
      .get("http://localhost:3000/food")
      .then(function(response) {
        setFoods(response.data);
      })
      .catch(function(error) {
        console.log(error.data);
      });
  };
  useEffect(() => {
    foodList();
  }, []);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  const fixedOptions = [Foods[0]];
  const [value, setValue] = React.useState([Foods[1]]);
  if (typeof value !== "undefined") {
    console.log("AutoComplate Test=>", ...value);
  }
  return (
    <Grid container>
      <Grid item xs={3}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={trLocale}
        >
          <Stack spacing={3}>
            <MobileDatePicker
              shouldDisableDate={isWeekend}
              disablePast={true}
              label="Menü Tarihi Seçiniz"
              value={date}
              onChange={(newValue) => {
                setDate(new Date(newValue).toISOString().substring(0, 10));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6}>
        <Autocomplete
          multiple={true}
          id="fixed-tags-demo"
          value={Foods[0]}
          onChange={(event, newValue) => {
            setValue([...newValue]);
          }}
          options={Foods}
          getOptionLabel={(option) => option.food}
          // renderTags={(tagValue, getTagProps) =>
          //   tagValue.map((option, index) => (
          //     <Chip
          //       label={option.food}
          //       {...getTagProps({ index })}
          //       disabled={fixedOptions.indexOf(option) !== -1}
          //     />
          //   ))
          // }.filter(
          // (option) => fixedOptions.indexOf(option) === -1
          //),
          renderInput={(params) => (
            <TextField
              {...params}
              label="Yemek Seçiniz"
              placeholder="Ekleyiniz"
            />
          )}
        />
      </Grid>
      <Grid item xs={2}>
        <input value={"Kaydet"} className="btn btn-primary"></input>
      </Grid>
    </Grid>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];
export default testAxios;
