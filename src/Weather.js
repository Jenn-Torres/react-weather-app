import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({});

  function search() {
    const apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={search}>
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              class="form-control"
              onChange={updateCity}
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
              autofocus="on"
              autocomplete="off"
            />
          </div>
        </div>
      </form>
      <h1 className="text-capitalize">{weatherData.city}</h1>
      <ul>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {Math.round(weatherData.wind)} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
