import axios from 'axios';
import { handleErrors } from '../utils';

const getWeatherData = async (searchText) => {

    try {
        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=07ed9cb59ef7455095be8f8c75a3a1a2`);
        
        let processedWeatherResponse = processWeatherResponse(weatherResponse)
        return processedWeatherResponse

    } catch (err) {
        return handleErrors(err)
    }
}

const processWeatherResponse = (weatherResponse) =>{
    let cityName = weatherResponse.data.city.name
    let weather = weatherResponse.data.list.map((weather)=>{
        return {
            dt_txt: weather.dt_txt,
            temp: weather.main.temp,
            pressure: weather.main.pressure,
            humidity: weather.main.humidity,
        }
    })
    return {
        cityName,
        weather
    }
}
export default getWeatherData;
