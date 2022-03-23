import React from "react";
import CurrentDay from "./CurrentDay";
import Forecast from "./Forecast";
import "./Weather.css";

const Weather = ({ data, forecastData }) => {
  return (
    <React.Fragment>
      <div className="row pt-5">
        <CurrentDay data={data} />
        <Forecast data={data} forecastData={forecastData} />
      </div>
    </React.Fragment>
  );
};

export default Weather;
