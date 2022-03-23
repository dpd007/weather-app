const CurrentDay = ({ data }) => {
  return (
    <div className="col-md-4 currentDay d-flex justify-content-center py-2">
      <div>
        <h4 className="text-dark">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          {"    " + data.name}
        </h4>
        <b>
          <p className="pt-2">{data.weather[0].main}</p>
        </b>
        <div className="details">
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
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
  );
};

export default CurrentDay;
