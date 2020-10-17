import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCityWeatherData } from "../../actions"

import getWeatherData from "../../services/getWeatherData"


const SearchForm = ({ addCityWeatherData }) => {

    const [searchText, setSearchText] = useState("")
    const handleOnSearchTextChange = (e) => {
        setSearchText(e.target.value)
    }
    const handleSearchFormSubmit = async (e) => {
        e.preventDefault();
        const weatherData = await getWeatherData(searchText)
        if(weatherData.error){
            alert(weatherData.error)
            return;
        }
        addCityWeatherData({
            cityName: weatherData.cityName,
            weather: weatherData.weather
        })
    }

    return (
        <form className="form-inline" onSubmit={handleSearchFormSubmit}>
            <input className={`form-control`}
                style={{width:"20em"}}
                type="search"
                placeholder="Search City, State or Country"
                onChange={handleOnSearchTextChange}
                value={searchText}
            />
            <button className="btn btn-primary" type="submit" >
                Search
            </button>
        </form>
    )
}

const mapDispatchToProps = {
    addCityWeatherData
}

export default connect(null, mapDispatchToProps)(SearchForm)
