import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleSubmit(response) {
        alert(`The weather in Zagreb is ${response.data.main.temp}°C`)
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3ba861b54cd5df7a279d3463ebc72481&units=metric`;
      axios.get(url).then(handleSubmit);
      
      
      return <h2> hello from weather</h2>

}
