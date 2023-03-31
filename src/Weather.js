import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              class="form-control"
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
      <h1>New York</h1>
      <ul>
        <li> Friday 11:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            />

            <span className="temperature">10</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 89%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
