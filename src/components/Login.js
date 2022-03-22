import React from "react";
import Header from "./Header";
import "./Login.css";
const Login = () => {
  return (
    <React.Fragment>
      <Header />
      <h2 className="text-light">this is the login page</h2>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item text-center">
              <a className="nav-link active" href>
                Login
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active">
              <div className="form px-4 pt-5">
                <input
                  type="text"
                  className="form-control email__holder"
                  placeholder="Email or Phone"
                />
                <input
                  type="password"
                  className="form-control password__holder"
                  placeholder="Password"
                />
                <button className="btn login__btn">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
