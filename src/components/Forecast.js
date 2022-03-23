const Forecast = ({ data,forecastData }) => {
  return (
    <div className="col-md-8">
      <div className="details__tab">
        <div className="d-flex text-light justify-content-around">
          <p>VISIBILITY</p>
          <p>{data.visibility}</p>
        </div>
        <div className="d-flex text-light justify-content-around">
          <p>MAX TEMP</p>
          <p>
            {data.main.temp_max}
            <span>&#176;C</span>
          </p>
        </div>
        <div className="d-flex text-light justify-content-around">
          <p>MIN TEMP</p>
          <p>
            {data.main.temp_min}
            <span>&#176;C</span>
          </p>
        </div>
        <div className="d-flex text-light justify-content-around">
          <p>PRESSURE</p>
          <p>{data.main.pressure}mb</p>
        </div>
      </div>
      <div className="days__contaienr">
        <ul className="py-4">
          {forecastData.map((data, index) => (
            <li key={index}>
              <h4 className="text-light">
                {new Date(data[0])
                  .toLocaleString("en-us", { weekday: "long" })
                  .substring(0, 3)}
              </h4>
              <img
                src={`http://openweathermap.org/img/wn/${data[1]}@2x.png`}
                alt=""
                className="text-light"
              />
              <p className="text-light">
                Max- {data[2]}
                <span>&#176;C</span>
              </p>
              <p className="text-light">
                Min- {data[3]}
                <span>&#176;C</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
