import React from "react";
import "./forecast.css";

export default function Forecast(props) {
  return (
    <div className="col-2 weather-forecast" id="forecast">
      <div id="forecast-element">
        <h3 className="forecast-timestamp">{props.day}</h3>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="sunny"
          class="float-left"
          id="icon-forecast"
        />
        <br />
        <strong>{props.maxTemp}c°</strong>
      </div>
    </div>
  );
}
