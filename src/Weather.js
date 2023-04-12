import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    const apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
          </div>
        </form>
        <h1 className="text-capitalize">{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-4">
          <div className="col-6">
            <div className="d-flex">
              <div className="float-left">
                <WeatherIcon code={weatherData.icon} size={56} />
              </div>

              <WeatherTemperature celsius={weatherData.temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} Km/h</li>
            </ul>
          </div>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
  }
}
