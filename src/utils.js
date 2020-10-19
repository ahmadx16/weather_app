export const getTemperatureData = (weatherData) => {
    return [{
        data: weatherData.weather.map((weather) => {
            return [new Date(weather.dt_txt), weather.temp - 273.15] // converting to Celcius scale
        })
    }]
}
export const getPressureData = (weatherData) => {
    return [{
        data: weatherData.weather.map((weather) => {
            return [new Date(weather.dt_txt), weather.pressure]
        })
    }]
}
export const getHumidityData = (weatherData) => {
    return [{
        data: weatherData.weather.map((weather) => {
            return [new Date(weather.dt_txt), weather.humidity]
        })
    }]
}

export const handleErrors = (err) => {

    // No response indicating a network error
    if (!err.response) {
        return {
            error: "Network Error: Cannot connect to Open weather API"
        }
    }
    if (err.response.status === 404) {
        return {
            error: err.response.data.message
        }
    }
    return {
        error: "An Error occured, Please contact support"
    }
}
