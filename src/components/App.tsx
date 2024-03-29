import { useEffect } from "react";
import Login from "./Login/Login";
import { setUser } from "../store/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { resetUser } from "../store/userSlice";
import { RootState } from "../store";
import Home from "./Home/Home";
import "./app.css";
import About from "./About/About";
import MyAccount from "./MyAccount/MyAccount";

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

  return (
    <div className="main_nav">
      <div className="main_topbar">
        {user.id ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
      <h1 className="header">Uptown Speech Therapy</h1>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {user.id && <Link to="/myaccount">My Account</Link>}
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          {user.id && <Route path="/myaccount" element={<MyAccount />}></Route>}
        </Routes>
      </div>
    </div>
  );
};

export default App;
