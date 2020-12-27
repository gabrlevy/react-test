import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response)
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  // function newCity(event) {
  //   setCity(event.target.value);
  // }
 
if (weatherData.ready) {
  return (
    <div className="weather">
    <div className="container border rounded p-3 mb-0">
      <form className="search-engine row p-2 mb-2" >
        <input
          type="search"
          id="city-input"
          placeholder="Type a city..."
          autofocus="on"
          autocomplete="off"
          className="form form-control shadow-sm col-4"
          // onChange={newCity}
        />
        <input
          type="submit"
          value="Search"
          className="button form-control btn btn-primary shadow-sm col-3"
        />
      </form>
      <WeatherInfo data={weatherData} />  
      </div>
      </div>
  );
  } else {
    const api_key = "9ce787f489663401b21d270d2e7a4185"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api_key}&units=metric`;
    axios.get(url).then(handleResponse);
    return "loading"
    }
  }