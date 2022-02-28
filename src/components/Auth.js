import classes from "./Auth.module.css";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      passwordRef.current.value.trim() === "" ||
      emailRef.current.value.trim() === "" ||
      !emailRef.current.value.includes("@") ||
      !emailRef.current.value.includes(".") ||
      isAuth
    ) {
      return;
      // no error neither validation management here, as it is not the purpouse of the redux class!
    }
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
