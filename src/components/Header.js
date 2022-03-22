import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions as actions } from "../app/Auth/AuthSlice";

const Header = ({ auth }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(actions.logout());
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  let logoutButton = (
    <button className="btn text-light logout__btn" onClick={logoutHandler}>
      Logout
    </button>
  );
  return (
    <div className="container header text-light pt-3 d-flex justify-content-between">
      <h1>Weather App</h1>
      {isAuthenticated === true ? logoutButton : null}
    </div>
  );
};

export default Header;
