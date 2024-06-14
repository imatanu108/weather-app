import React from 'react'

function HourlyForecastCard({hourlyData}) {
  let temp = hourlyData.temp_c
  let icon = hourlyData.condition.icon
  let condition = hourlyData.condition.text
  let rain = hourlyData.chance_of_rain
  let time = hourlyData.time.split(" ")[1]

  if (hourlyData) {
    return (
      <div className='flex flex-col justify-center items-center border-2 border-[rgb(142,204,208)] rounded-xl p-3 shadow-lg'>
        <div>{temp} °C</div>
        <img height={60} src={icon} alt="weather-icon" />
        <div>{condition}</div>
        <div>Rain - {rain}%</div>
        <div>{time}</div>
      </div>
    )
  }
}

export default HourlyForecastCard