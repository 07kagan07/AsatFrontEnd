import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import trLocale from "date-fns/locale/tr";
import isWeekend from "date-fns/isWeekend";

export default function TarihSec(props) {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
    props.handleTarihChanged(newValue);
  };

  const dateChange = () => {
    let day = new Date(value).toLocaleDateString("tr-Tr", {
      weekday: "long",
    });
    const axios = require("axios").default;
    axios
      .post(process.env.REACT_APP_LOCAL_IP + "/date/add", {
        meal_date: value,
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
  };

  React.useEffect(() => {
    dateChange();
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={trLocale}>
      <Stack spacing={3}>
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
  );
}
