import "./Weather.css";
const Weather = ({ data }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 currentDay d-flex justify-content-center py-2">
          <div>
            <h4 className="text-dark">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              {"    " + data.name}
            </h4>
            <b>
              <p>{data.weather[0].description}</p>
            </b>
            <div className="details">
              <img
                src="https://www.metaweather.com/static/img/weather/lc.svg"
                alt=""
                style={{ width: "45px" }}
              />
              <b>
                <p style={{ fontSize: "25px" }}>
                  {data.main.temp}
                  <span>&#176;C</span>
                </p>
              </b>
            </div>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Weather;
