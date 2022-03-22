import "./Header.css";
import { useSelector } from "react-redux";
import { authActions } from "../app/Auth/AuthSlice";
let logoutButton = (
  <button className="btn text-light logout__btn">Logout</button>
);
const Header = ({ auth }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="container header text-light pt-3 d-flex justify-content-between">
      <h1>Weather App</h1>
      {isAuthenticated === true ? logoutButton : null}
    </div>
  );
};

export default Header;
