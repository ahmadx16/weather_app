import React from 'react'
import { Chart } from 'react-charts'

export const WeatherChart = ({data}) => {
  
  const axes = [
    { primary: true, type: 'time', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ]

  const lineChart = (
    <div
      style={{
        width: '550px',
        height: '400px',
      }}
    >
      <Chart data={data} axes={axes}  />
    </div>
  )

  return (lineChart)
}
