import React from "react";
import Header from "./Header";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated === false) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
      <Header />
      <h2 className="text-light">this is home page</h2>
    </React.Fragment>
  );
};

export default Home;