import React, { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { authActions as actions } from "../app/Auth/AuthSlice";
import { Navigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "dasdurga923@gmail.com" && password === "1234") {
      dispatch(actions.login());
    } else {
      alert("Email or Passoword is incorrect. Please try again!!");
      setEmail();
      setPassword();
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return (
    <React.Fragment>
      <Header auth={isAuthenticated} />
      <h2 className="text-light">this is the login page</h2>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item text-center">
              <a className="nav-link active" href="true">
                Login
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active">
              <div className="form px-4 pt-5">
                <form onSubmit={submitHandler}>
                  <input
                    type="text"
                    className="form-control email__holder"
                    placeholder="Email or Phone"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    className="form-control password__holder"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button className="btn login__btn">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
