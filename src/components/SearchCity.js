import "./SearchCity.css";
const cities = ["Bhubaneswar", "Cuttack", "New Delhi", "Pune"];
const SearchCity = (props) => {
  const searchHandler = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <div className="search__container py-3">
      <select
        className="form-select"
        name="search"
        id="search"
        onChange={searchHandler}
      >
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchCity;
