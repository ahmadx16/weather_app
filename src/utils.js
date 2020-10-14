export const getTemperatureData = (weatherData) => {
    return [{
        data: weatherData.weather.map((weather) => {
            return [new Date(weather.dt_txt), weather.main.temp - 273.15] // converting to Celcius scale
        })
    }]
}
export const getPressureData = (weatherData) => {
    return [{
        data: weatherData.weather.map((weather) => {
            return [new Date(weather.dt_txt), weather.main.pressure]
        })
    }]
}
export const getHumidityData = (weatherData) => {
    return [{
        data: weatherData.weather.map((weather) => {
            return [new Date(weather.dt_txt), weather.main.humidity]
        })
    }]
}
