import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchCity from "./SearchCity";
import { get } from "axios";
import Weather from "./Weather";
const API_KEY = "dc48d814579cd8bd974bb0e057b81e6a";
const url = "https://api.openweathermap.org/data/2.5/weather?";
const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [forecastData, setForecastData] = useState();
  const cityHandler = (value) => {
    setCity(value);
  };
  useEffect(() => {
    if (city !== "") {
      get(url + `q=${city}&appid=${API_KEY}&units=metric`).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    }
  }, [city]);
  if (isAuthenticated === false) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
      <Header />
      <h2 className="text-light">Search for location</h2>
      <div className="container">
        <SearchCity onSearch={cityHandler} />
        {data && <Weather data={data} />}
      </div>
    </React.Fragment>
  );
};

export default Home;
