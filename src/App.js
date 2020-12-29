import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
    return(
    <div className="App">
        <div className="container m-4">
        <Weather defaultCity="sao paulo"/>
        <footer>
      <a href="https://github.com/gabrlevy/react-test" target="_blankrecipes">
        {" "}
        open-source coded
      </a>{" "}
      by Gabriela Levy
      </footer>
      </div>
    </div>
    )
}