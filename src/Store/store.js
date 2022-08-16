import { configureStore } from "@reduxjs/toolkit";
import addFoodSliceReducer from "../Slices/addFoodSlice";
import addMenuSliceReducer from "../Slices/addMenuSlice";

export default configureStore({
  reducer: {
    addFood: addFoodSliceReducer,
    addMenu: addMenuSliceReducer,
  },
});
