import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/filmylogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [showPassowrd, setShowPassowrd] = useState(false);

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleUsername = (e) => {
    setLogin({
      ...login,
      username: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setLogin({
      ...login,
      password: e.target.value,
    });
  };

  const handleLoginBtn = (e) => {
    e.preventDefault();
    const LogIn = {
      username: login.username,
      password: login.password,
    };
    axios
      .post("http://localhost:5000/login", LogIn)
      .then((data) => {
        console.log(data);
        let token = data.data.user;
        localStorage.setItem("token", token);
        alert("You have Successfully Logged In...");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Username & Password");
      });

    setLogin({
      username: "",
      password: "",
    });
  };

  return (
    <div id="login">
      <div className="form-box">
        <img src={logo} alt="Filmy Industry" />
        <h1>Login to Admin Dashboard</h1>
        <div className="mt-2">
          <div className="inputField">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={login.username}
              onChange={handleUsername}
            />
          </div>
          <div className="inputField mt-3">
            <input
              type={showPassowrd ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={handlePassword}
            />
            <i
              className={showPassowrd ? "fa fa-eye-slash" : "fa fa-eye"}
              id="password-icon"
              onClick={() => setShowPassowrd(!showPassowrd)}
            ></i>
          </div>
        </div>
        <button className="loginBtn" onClick={handleLoginBtn}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
