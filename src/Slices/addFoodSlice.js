import { createSlice } from "@reduxjs/toolkit";

export const addFoodSlice = createSlice({
  name: "addFood",
  initialState: {
    yemekGonderildiMi: true,
  },
  reducers: {
    setYemekGonder: (state, action) => {
      state.yemekGonderildiMi = action.payload;
    },
  },
});

export const { setYemekGonder } = addFoodSlice.actions;

export default addFoodSlice.reducer;
