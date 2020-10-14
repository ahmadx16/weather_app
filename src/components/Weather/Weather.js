import React from 'react'
import { weatherDataReducer } from '../../reducers'
import { WeatherChart } from "../WeatherChart/WeatherChart"


export const Weather = ({weatherData}) => {

  const getTemperatureData = ()=>{
    return [{data:weatherData.weather.map((weather,counter)=>{
      return [counter, weather.main.temp-273.15] // converting to Celcius scale
    })}]
  }
  const getPressureData = ()=>{
    return [{data:weatherData.weather.map((weather,counter)=>{
      return [counter,weather.main.pressure]
    })}]
  }
  const getHumidityData = ()=>{
    return [{data:weatherData.weather.map((weather, counter)=>{
      return [counter, weather.main.humidity]
    })}]
  }

  console.log(getTemperatureData())
  console.log(weatherData)
  

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1> {weatherData.name}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Temperature (Celsius)</h3>
          <WeatherChart data={getTemperatureData()} />
        </div>
        <div className="col">
          <h3>Pressure (hPa)</h3>
          <WeatherChart data={getPressureData()} />
        </div>
        <div className="col">
          <h3>Humidity (%))</h3>
          <WeatherChart data={getHumidityData()} />
        </div>
      </div>
    </div>
  );
}

export default Weather
