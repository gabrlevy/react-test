import React from "react";
// import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion"


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
        <div className="col-7">
            <div className="clearfix weather-temperature">
                <div className="float-left">
                    <WeatherIcon code={props.data.icon}/>
                </div>
                <WeatherConversion temperature={props.data.temperature}/>
            </div>
        </div>
    
        <div className="details float-right col-5">
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