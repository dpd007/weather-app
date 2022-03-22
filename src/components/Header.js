const Header = () => {
  return (
    <div className="container header text-light pt-3 d-flex justify-content-between">
      <h1>Weather App</h1>
      <button className="btn text-light" style={{ fontSize: "1.5rem" }}>
        Logout
      </button>
    </div>
  );
};

export default Header;
