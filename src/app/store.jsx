import { configureStore } from "@reduxjs/toolkit";
import numbersSlice from "../slices/numbersSlice";

const store = configureStore({
  reducer: {
    numbers: numbersSlice,
  },
});

export default store;
