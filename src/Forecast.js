import React, { useState } from "react";
import axios from "axios";
import "./forecast.css";
import ForecastPreview from "./ForecastPreview";


export default function Forecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleForecast(response) {
    setForecastData(response.data);
    setLoaded(true);
}

  if (loaded && props.city === forecastData.city.name) {
    return (
        <div className="Forecast row pt-4">
          {forecastData.list.filter(function (value, index, ar) {
    return (index % 8 === 0);
          }).map(function (forecastItem) {
            return <ForecastPreview data={forecastItem} />
          })}
        </div>
          );
    } else {
    const api_key = "3ba861b54cd5df7a279d3463ebc72481"  
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${api_key}&units=metric`;
    axios.get(forecastUrl).then(handleForecast);
    
    return null;
}
}