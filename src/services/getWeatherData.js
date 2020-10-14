import axios from 'axios';

const getWeatherData = async (searchText) => {

    try {
        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=07ed9cb59ef7455095be8f8c75a3a1a2`);
        return weatherResponse

    } catch (err) {
        // No response indicating a network error
        if (!err.response) {
            return {
                error: "Network Error: Cannot connect to Open weather API"
            }
        }
        if (err.response.status===404){
            return {
                error: err.response.data.message
            }
        }
        return {
            error: "An Error occured, Please contact support"
        }
    }
}

export default getWeatherData;
