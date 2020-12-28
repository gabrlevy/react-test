import React, { useState } from "react";

export default function WeatherConversion(props) {
    const [unit, setUnit] = useState("celsius")
    const temperatureInFahrenheit = (props.temperature * 9 / 5 +32)

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
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