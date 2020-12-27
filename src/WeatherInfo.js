import React from "react";
// import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
// import ReactAnimatedWeather from 'react-animated-weather';
/* <div className="icon float-left p-2"><ReactAnimatedWeather
    className="float-left icon"
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
    />
    </div> */

export default function WeatherInfo(props) {
//      const defaults = {
//     icon: 'CLEAR_DAY',
//     color: 'goldenrod',
//     size: 70,
//     animate: true
//   };
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
    {/* <div className="row">
        <Forecast day="Tuesday" maxTemp="28" />
        <Forecast day="Wednesday" maxTemp="24" />
        <Forecast day="Thursday" maxTemp="22" />
        <Forecast day="Friday" maxTemp="20" />
        <Forecast day="Saturday" maxTemp="25" />
    </div> */}
</div>)
}