/*import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

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
/* here below if we add multiple store slices!
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // scoring: scoringSlice.reducer   // could be another ex if we add other slices of store state!
  },
}); // reducer is a big object automatically triggering all the increment + decrement + toogleCounter reducers!
*/

/*const authInitialState = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
/*



*/
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import counterSlice from "./counterSlice";
const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});
export default store;
/*






HERE BELOW WITH METHODOLOGY WITHOUT REDUX TOOLKIT



const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter:
        state.counter - action.payload < 0 ? 0 : state.counter - action.payload,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toogle_display") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
*/
