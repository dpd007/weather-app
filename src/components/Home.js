import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchCity from "./SearchCity";
import { get } from "axios";
import Weather from "./Weather";
const API_KEY = "";
const url = "https://api.openweathermap.org/data/2.5/weather?";
const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?";
const Home = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [forecastData, setForecastData] = useState([]);
  const cityHandler = (value) => {
    setCity(value);
  };
  useEffect(() => {
    if (city !== "") {
      let url2 = url + `q=${city}&appid=${API_KEY}&units=metric`;
      get(url2)
        .then((res) => {
          if (res.statusText === "OK") {
            setData(res.data);
          }
        })
        .catch((err) => {
          if (err.response) {
            setIsErrorOccured(true);
            setData("");
          } else if (err.request) {
            setIsErrorOccured(true);
            setData("");
          } else {
            setIsErrorOccured(true);
            setData("");
          }
        });
      fetchForecastData();
    }
  }, [city]);
  function fetchForecastData() {
    get(urlForecast + `q=${city}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        if (res.statusText === "OK") {
          let temp = [];
          for (let i = 0; i < res.data.list.length; i += 8) {
            const tempo = [
              // res.data.list[i].dt_txt,
              new Date(res.data.list[i].dt_txt),
              res.data.list[i].weather[0].icon,
              res.data.list[i].main.temp_max,
              res.data.list[i].main.temp_min,
            ];
            temp.push(tempo);
          }
          setForecastData(temp);
        }
      })
      .catch((err) => {
        if (err.response) {
          setIsErrorOccured(true);
          setForecastData("");
        } else if (err.request) {
          setIsErrorOccured(true);
          setForecastData("");
        } else {
          setIsErrorOccured(true);
          setForecastData("");
        }
      });
  }
  if (isAuthenticated === false) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
      <Header />
      <h2 className="text-light">Search for location</h2>
      <div className="container">
        <SearchCity onSearch={cityHandler} />
        {isErrorOccured && (
          <div>
            <h3 className="text-light">
              Error Occured!! Couldn't fetch the data.
            </h3>
          </div>
        )}
        {data && <Weather data={data} forecastData={forecastData} />}
      </div>
    </React.Fragment>
  );
};

export default Home;
