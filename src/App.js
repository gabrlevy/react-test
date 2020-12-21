import React from "react";
import Weather from "./Weather";

export default function App() {
    return(
    <div className="App">
        <h1>Weather App</h1>
        <Weather />
        <footer>
      <a href="https://github.com/gabrlevy/react-test" target="_blankrecipes">
        {" "}
        open-source coded
      </a>{" "}
      by Gabriela Levy
      </footer>
    </div>
    )
}