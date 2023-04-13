import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/57892-jennifer-torres"
            target="_blank"
            rel="noreferrer"
          >
            Jennifer Torres{" "}
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/Jenn-Torres/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
