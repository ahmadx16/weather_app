import React from 'react'
import { Chart } from 'react-charts'

export const WeatherChart = ({data}) => {
  
  const axes = [
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ]

  const lineChart = (
    <div
      style={{
        width: '500px',
        height: '300px',
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )

  return (lineChart)
}
