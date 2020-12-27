import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";
import "./weather.css";
import ReactAnimatedWeather from 'react-animated-weather';
import FormattedDate from "./FormattedDate"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
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
  // const [city, setCity] = useState(" ");
  // const [message, setMessage] = useState(" ");
  // const [temperature, setTemperature] = useState(null);
  // const [description, setDescription] = useState(" ");
  // const [humidity, setHumidity] = useState(null);
  // const [wind, setWind] = useState(null);

  // function showTemperature(response) {
  //   setTemperature(Math.round(response.data.main.temp));
  //   setDescription(response.data.weather[0].description);
  //   setHumidity(response.data.main.humidity);
  //   setWind(response.data.wind.speed);
  //   setMessage(response.data.name);
  // }

  // function newCity(event) {
  //   setCity(event.target.value);
  // }
  const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 70,
    animate: true
  };
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
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date} /></li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
          <div className="icon float-left p-2"><ReactAnimatedWeather
            className="float-left icon"
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
          </div>
            <div className="float-left">
              <span className="temperature" id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <span>
                  <a href="/" id="celsius-link">
                    °C
                  </a>
                </span>{" "}
                |
                <span>
                  <a href="/" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="details float-right col-6">
          <ul>
            <li>
              Humidity: {weatherData.humidity}%
            </li>
            <li>
              Wind: {weatherData.wind}km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <Forecast day="Tuesday" maxTemp="28" />
        <Forecast day="Wednesday" maxTemp="24" />
        <Forecast day="Thursday" maxTemp="22" />
        <Forecast day="Friday" maxTemp="20" />
        <Forecast day="Saturday" maxTemp="25" />
      </div>
    </div>
    </div>
  );
   } else {
    let city = "Lisboa"
    const api_key = "3ba861b54cd5df7a279d3463ebc72481&units=metric"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${api_key}`;
    axios.get(url).then(handleResponse);

    return(<h1>loading</h1>)
}
}

