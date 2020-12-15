import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";
import "./weather.css";
import ReactAnimatedWeather from 'react-animated-weather';



export default function Weather() {
  const [city, setCity] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(" ");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);

  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setMessage(response.data.name);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ba861b54cd5df7a279d3463ebc72481&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function newCity(event) {
    setCity(event.target.value);
  }
  const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 70,
    animate: true
  };

  return (
    <div className="container shadow p-5 mb-5 bg-white rounded mb-0">
    <div className="search">
      <form className="search-engine row p-2 mb-2" onSubmit={handleSubmit}>
        <input
          type="search"
          id="city-input"
          placeholder="Type a city..."
          autofocus="on"
          autocomplete="off"
          className="form form-control shadow-sm col-4"
          onChange={newCity}
        />
        <input
          type="submit"
          value="Search"
          className="button form-control btn btn-primary shadow-sm col-3"
        />
      </form>
      <div className="overview">
        <h1>{message}</h1>
        <ul>
          <li>{description}</li>
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
  /></div>
            <div className="float-left">
              <span className="temperature" id="temperature">
                {temperature}
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
              Humidity: {humidity}%
            </li>
            <li>
              Wind: {wind}km/h
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
}

