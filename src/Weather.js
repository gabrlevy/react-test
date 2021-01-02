import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;


export default function Weather(props) {
  const [city, setCity] = useState("Lisbon")
  // const [lat, setLatitude] = useState(null);
  // const [lon, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState({ready: false});
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search()
  }
  function search() {
    const api_key = "3ba861b54cd5df7a279d3463ebc72481"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    axios.get(url).then(handleResponse);
  }
 
  function newCity(event) {
    setCity(event.target.value); 
  }
  function currentCity() {
    navigator.geolocation.getCurrentPosition(showPosition, getCurrentPositionError) ;

  }
  function showPosition(position) {
    // setLatitude(position.coords.latitude);
    // setLongitude(position.coords.longitude);
    const api_key = "3ba861b54cd5df7a279d3463ebc72481"  
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${api_key}&units=metric`;
    axios.get(url).then(handleResponse);
    }
    function getCurrentPositionError(error) {
      alert("Couldn't access your current position, check a random city instead");
      search()
    }

    // currentCity();

if (weatherData.ready) {
  return (
    <div className="weather">
      <div className="container border rounded p-3 mb-0">
        <form className="search-engine row p-2 mb-2" onSubmit={handleSubmit}>
          <input
            type="search"
            id="city-input"
            placeholder="Type a city..."
            autoFocus="on"
            autoComplete="off"
            className="form form-control shadow-sm col-4"
            onChange={newCity}
          />
          <input
            type="submit"
            value="Search"
            className="button form-control btn btn-primary shadow-sm col-3"
          />
          <input 
            type="submit"
            value="Current City"
            className="button btn btn-secondary shadow-sm col-3"
            onClick={currentCity}
          />
          
        </form>

          <WeatherInfo data={weatherData} />  
          <Forecast city={weatherData.city} />
      </div>
    </div>
  );
  } else {
    currentCity();
    return (
    <div className="sweet-loading">

    <BounceLoader color={color} loading={loading} css={override} size={160} />
  </div>)
    }
  }
