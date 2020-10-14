import React from 'react'
import { WeatherChart } from "../WeatherChart/WeatherChart"
import {getTemperatureData, getPressureData, getHumidityData} from "../../utils"

export const Weather = ({ weatherData }) => {

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="jumbotron text-center">
            <h1>{weatherData.name}</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Temperature (&#730;C)</h3>
          <WeatherChart data={getTemperatureData(weatherData)} />
        </div>
        <div className="col">
          <h3>Pressure (hPa)</h3>
          <WeatherChart data={getPressureData(weatherData)} />
        </div>
        <div className="col">
          <h3>Humidity (%)</h3>
          <WeatherChart data={getHumidityData(weatherData)} />
        </div>
      </div>
    </div>
  );
}

export default Weather
