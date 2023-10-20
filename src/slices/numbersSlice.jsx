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
  },
});

export const { addNumber } = numbersSlice.actions;
export default numbersSlice.reducer;
