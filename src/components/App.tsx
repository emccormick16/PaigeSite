import React, { useEffect } from "react";
import Login from "./Login";
import { setUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { resetUser } from "../store/userSlice";
import { RootState } from "../store";

const App = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const loginWithToken = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });

      dispatch(setUser(response.data));
    }
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
  };

  useEffect(() => {
    loginWithToken();
  }, []);

  // if (!user.id) return <Login />;
  return (
    <div>
      <div>
        {user.id ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </div>
      <h1>Paige McCormick Inc.</h1>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes></Routes>
      </div>
    </div>
  );
};

export default App;
