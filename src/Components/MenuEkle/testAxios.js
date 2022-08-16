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
const axios = require("axios").default;

const testAxios = () => {
  const [value, setValue] = useState(new Date().toISOString().substring(0, 10));

  console.log("Tarih Test=>", value);

  return (
    <Grid>
      <Grid item xs={3}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={trLocale}
        >
          <Stack spacing={3}>
            <MobileDatePicker
              shouldDisableDate={isWeekend}
              disablePast="true"
              label="Menü Tarihi Seçiniz"
              value={value}
              onChange={(newValue) => {
                setValue(new Date(newValue).toISOString().substring(0, 10));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};
export default testAxios;
