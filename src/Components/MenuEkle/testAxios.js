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
//import Chip from "@mui/material/Chip";
const axios = require("axios").default;

const testAxios = () => {
  //-----------------AUTOCOMPLATE---------------------

  const [Foods, setFoods] = useState([]);

  const defaultOptions = [Foods[0], Foods[1]];
  const [value, setValue] = useState([...defaultOptions]);

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

  if (typeof value !== "undefined") {
    console.log("AutoComplate Test=>", ...value);
  }

  //-----------------AUTOCOMPLATE---------------------

  //-----------------DATEPİCKER-----------------------

  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [dateID, setDateID] = useState();
  const getDateId = () => {
    axios
      .post("http://localhost:3000/date/find", {
        meal_date: date,
      })
      .then(function(response) {
        setDateID(response.data.id);
        console.log("Response Data=> ", response.data.id);
      })
      .catch(function(error) {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getDateId();
  }, [date]);

  console.log(dateID);
  //-----------------DATEPİCKER-----------------------

  const changeDate = () => {
    setDate("2022-08-22");
  };

  return (
    <Grid container className="py-2">
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
      <Grid item xs={7} className="mx-2">
        {Foods.length > 0 && (
          <Autocomplete
            multiple={true}
            id="fixed-tags-demo"
            defaultValue={defaultOptions}
            onChange={(event, newValue) => {
              setValue([...newValue]);
            }}
            options={Foods}
            getOptionLabel={(option) => option.food}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Yemek Seçiniz"
                placeholder="Ekleyiniz"
              />
            )}
          />
        )}
      </Grid>
      <Grid item xs={1} className="py-2 ">
        <input
          onClick={changeDate}
          value={"Kaydet"}
          className="btn btn-primary"
          readOnly={true}
        ></input>
      </Grid>
    </Grid>
  );
};

export default testAxios;

// renderTags={(tagValue, getTagProps) =>
//   tagValue.map((option, index) => (
//     <Chip
//       label={option.food}
//       {...getTagProps({ index })}
//       disabled={fixedOptions.indexOf(option) !== -1}
//     />
//   ))
// }
// .filter(
// (option) => fixedOptions.indexOf(option) === -1
// ),
