import React from "react";
import Counter from "./components/Counter";
import Header from "../src/components/Header";
import Auth from "../src/components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "../src/components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      <Counter />
      {isAuth && <UserProfile />}
    </React.Fragment>
  );
}

export default App;
