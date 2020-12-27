import React from "react";
import "./forecast.css";
import ReactAnimatedWeather from 'react-animated-weather';


export default function Forecast(props) {
  const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 60,
    animate: true
  };
  return (
    <div className="col-2 weather-forecast" id="forecast">
      <div id="forecast-element">
        <h3 className="forecast-timestamp">{props.day}</h3>
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <br />
        <strong>{props.maxTemp}c°</strong>
      </div>
    </div>
  );
}
