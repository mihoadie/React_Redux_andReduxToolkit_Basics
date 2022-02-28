import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload; // as redux toolkit will indirectly make a copy of the state, so we can mutate this way directly, ONLY with toolkit!!!!
    },
    decrement(state, action) {
      state.counter =
        state.counter - action.payload < 0 ? 0 : state.counter - action.payload;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
