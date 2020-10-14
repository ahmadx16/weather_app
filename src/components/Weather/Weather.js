import React from 'react'
import { weatherDataReducer } from '../../reducers'
import { WeatherChart } from "../WeatherChart/WeatherChart"


export const Weather = ({ weatherData }) => {

  const getTemperatureData = () => {
    return [{
      data: weatherData.weather.map((weather) => {
        return [ new Date(weather.dt_txt), weather.main.temp - 273.15] // converting to Celcius scale
      })
    }]
  }
  console.log(getTemperatureData())
  const getPressureData = () => {
    return [{
      data: weatherData.weather.map((weather) => {
        return [new Date(weather.dt_txt), weather.main.pressure]
      })
    }]
  }
  const getHumidityData = () => {
    return [{
      data: weatherData.weather.map((weather) => {
        return [new Date(weather.dt_txt), weather.main.humidity]
      })
    }]
  }

  console.log(getTemperatureData())
  console.log(weatherData)

  const data = [{
    data: [{ x: new  Date('2012-12-13'), y: 4 }, { x: new Date('2016-12-13'), y: 5 }]
  }]
  console.log(data)

  return (
    <div>
      <div className="row">
        <div className="col">
        <div class="jumbotron text-center">
          <h1>{weatherData.name}</h1>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
       <h1>Temperature (&#730;C)</h1>
    
          <h3></h3>
          <WeatherChart data={getTemperatureData()} />
        </div>
        <div className="col">
          <h3>Pressure (hPa)</h3>
          <WeatherChart data={getPressureData()} />
        </div>
        <div className="col">
          <h3>Humidity (%)</h3>
          <WeatherChart data={getHumidityData()} />
        </div>
      </div>
    </div>
  );
}

export default Weather
