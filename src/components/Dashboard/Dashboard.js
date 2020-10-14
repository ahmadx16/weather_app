import React from 'react';
import { connect } from 'react-redux'
import { addCityWeatherData } from "../../actions"

const Dashboard = ({ weatherDataState }) => {

  const weatherDataMap = weatherDataState.map((weatherData,counter)=>{
    return(
      <div key={counter}>{weatherData.temp}</div>
    )
  })

  return (
    <div>
      Dashboard
      {weatherDataMap}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherDataState: state
  }
}

export default connect(mapStateToProps)(Dashboard);
