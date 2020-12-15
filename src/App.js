import React from "react";
import Signature from './Signature';
import Weather from "./Weather";

export default function App() {
    return(
    <div className="container">
        <Weather />
        <Signature />
    </div>
    )
}