import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App React </h1>
    <Weather />
    <br />
    <a
      className="App-link"
      href="https://github.com/marinamorcos92/react-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open Source code
    </a>{" "}
    coded by Marina Morcos ;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
