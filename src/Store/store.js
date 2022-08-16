import { configureStore } from "@reduxjs/toolkit";
import addFoodSliceReducer from "../Slices/addFoodSlice";
import addMenuSliceReducer from "../Slices/addMenuSlice";
import updateMealReducer from "../Slices/updateMealSlice";

export default configureStore({
  reducer: {
    addFood: addFoodSliceReducer,
    addMenu: addMenuSliceReducer,
    updateMeal: updateMealReducer,
  },
});
