import React, { useState } from "react";

export default function WeatherConversion(props) {
    const [unit, setUnit] = useState("celsius")
    const temperatureInFahrenheit = (props.temperature * 9 / 5 + 32)

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
        var x = document.getElementsByClassName("forecastTemp");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].innerHTML = Math.round(((x[i].innerHTML) * 9 / 5 + 32));
        }
        var y = document.getElementsByClassName("forecastUnit");
        for (i = 0; i < y.length; i++) {
            y[i].innerHTML = "°F";
        }
        
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
        var x = document.getElementsByClassName("forecastTemp");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML = Math.round((x[i].innerHTML - 32) * 5 / 9);
        }
        
        x = document.getElementsByClassName("forecastUnit");
        for (i = 0; i < x.length; i++) {
            x[i].innerHTML = "°C";
        }
    }
    if (unit === "celsius") {


    return (
    <div className="WeatherConversion">
        <span className="temperature">
            {Math.round(props.temperature)}
        </span>
        <span className="units">
            °C | {" "}
        <a href="/" onClick={convertToFahrenheit}>
            °F
        </a>
        </span>
    </div>)
} else {


    return    (
    <div className="WeatherConversion">
        <span className="temperature">
            {Math.round(temperatureInFahrenheit)}
        </span>
        <span className="units">
        <a href="/" onClick={convertToCelsius}>    
            °C
        </a>
        {" "} | °F
        </span>
    </div>)
}
}