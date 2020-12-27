import React from "react";
// import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {

    return (
<div className="WeatherInfo">
    <div className="overview">
        <h1>{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li>{props.data.description}</li>
            </ul>
    </div>
    <div className="row">
        <div className="col-6">
            <div className="clearfix weather-temperature">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon}/>
                </div>
                <span className="temperature" id="temperature">
                    {Math.round(props.data.temperature)}
                </span>
                <span className="units">
                    <span className="celcius">
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
    
        <div className="details float-right col-6">
            <ul>
                <li>
                    Humidity: {props.data.humidity}%
                </li>
                <li>
                    Wind: {props.data.wind}km/h
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}