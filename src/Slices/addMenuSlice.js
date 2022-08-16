import { createSlice } from "@reduxjs/toolkit";

export const addMenuSlice = createSlice({
  name: "addMenu",
  initialState: {
    menuGonderildiMi: true,
  },
  reducers: {
    setMenuGonder: (state, action) => {
      state.menuGonderildiMi = action.payload;
    },
  },
});

export const { setMenuGonder } = addMenuSlice.actions;

export default addMenuSlice.reducer;
