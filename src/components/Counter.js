import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { counterActions } from "../store/counterSlice"; // ADDED TO GET ACCESS TO REDUX TOOLKIT ACTIONS EXPORTED IN STORE/INDEX.JSor store/counterSlice if we splitted the slices of store!

const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter.counter; // state.counter.counter because we now have different slices of state!
  });
  const showCounter = useSelector((state) => {
    return state.counter.showCounter;
  });
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(1)); // TOOLKIT WILL AUTOMATICALLY TRNAFORM THE PARAMETER 1 TO {payload:1} so then, in the reducers in the counterSlice, when the action is dispatched, the mutation is done without any problem!
  };
  const incrementByFiveHandler = () => {
    dispatch(counterActions.increment(5)); // TOOLKIT WILL AUTOMATICALLY TRNAFORM THE PARAMETER 5 TO {payload:5} so then, in the reducers in the counterSlice, when the action is dispatched, the mutation is done without any problem!
  };
  const decrementByFiveHandler = () => {
    dispatch(counterActions.decrement(5)); // TOOLKIT WILL AUTOMATICALLY TRNAFORM THE PARAMETER 5 TO {payload:5} so then, in the reducers in the counterSlice, when the action is dispatched, the mutation is done without any problem!
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement(1)); // TOOLKIT WILL AUTOMATICALLY TRNAFORM THE PARAMETER 1 TO {payload:1} so then, in the reducers in the counterSlice, when the action is dispatched, the mutation is done without any problem!
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter()); // no parameter needed here as payload
  };

  // HERE BELOW THE PREVIOUS CODE WITHOUT USING TOOLKIT! CONFERE STORE:INDEX.JS

  // const incrementHandler = () => {
  //   dispatch({ type: "increment", payload: 1 });
  // };
  // const incrementByFiveHandler = () => {
  //   dispatch({ type: "increment", payload: 5 });
  // };
  // const decrementByFiveHandler = () => {
  //   dispatch({ type: "decrement", payload: 5 });
  // };
  // const decrementHandler = () => {
  //   dispatch({ type: "decrement", payload: 1 });
  // };
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toogle_display" });
  // };

  return (
    <main className={classes.counter}>
      {showCounter && (
        <React.Fragment>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementByFiveHandler}>Decrement 5</button>
            <button onClick={incrementByFiveHandler}>Increment 5</button>
          </div>
        </React.Fragment>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
