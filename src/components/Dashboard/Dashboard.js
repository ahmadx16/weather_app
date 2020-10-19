import React from 'react';
import { connect } from 'react-redux'
import { Weather } from "../Weather/Weather"

const Dashboard = ({ weatherDataState }) => {

  const weatherDataMap = weatherDataState.map((weatherData, counter) => {
    return (
      <Weather key={counter} weatherData={weatherData} />
    )
  })

  return (
    <div>
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
