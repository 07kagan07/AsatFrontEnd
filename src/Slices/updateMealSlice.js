import { createSlice } from "@reduxjs/toolkit";

export const updateMealSlice = createSlice({
  name: "updateMeal",
  initialState: {
    mealDate: "",
  },
  reducers: {
    setUpdateMeal: (state, action) => {
      state.mealDate = action.payload;
    },
  },
});

export const { setUpdateMeal } = updateMealSlice.actions;

export default updateMealSlice.reducer;
