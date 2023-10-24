import { createSlice } from "@reduxjs/toolkit";

export const numbersSlice = createSlice({
  name: "numbers",
  initialState: {
    numbers: [],
  },
  reducers: {
    addNumber: (state, action) => {
      state.numbers.push(action.payload);
    },
    removeNumber: (state, action) => {
      state.numbers = state.numbers.filter((number) => number !== action.payload);
    },
  },
});

export const { addNumber, removeNumber } = numbersSlice.actions;
export default numbersSlice.reducer;
