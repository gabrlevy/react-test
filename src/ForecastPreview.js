import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
// import getDayName from "./FormattedDate";


export default function ForecastPreview(props) {
   
function hours() {
    let date = new Date(props.data.dt * 1000)
    // let hours = date.getDay();
    // return getDayName(hours);
    return <FormattedDate date={date} />
}

function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}`
}
    
return (
    <div className="ForecastPreview col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        <span className="forecastTemp">{temperature()}</span><span className="forecastUnit">°C</span>
    </div>
)    
}