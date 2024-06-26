import React from 'react'

function HourlyForecastCard({hourlyData}) {
  let temp = hourlyData.temp_c
  let icon = hourlyData.condition.icon
  let condition = hourlyData.condition.text
  let rain = hourlyData.chance_of_rain
  let time = hourlyData.time.split(" ")[1]

  if (hourlyData) {
    return (
      <div className='flex text-sm text-[rgba(190,238,241,0.96)] gap-1 font-[100] flex-col justify-center items-center border-2 border-[rgb(168,224,228)] rounded-xl p-2 shadow-lg'>
        <div className='text-base text-slate-50 font-bold pb-1'>{temp} °C</div>
        <img height={60} src={icon} alt="weather-icon" />
        <div>{condition}</div>
        <div>Rain - {rain}%</div>
        <div>{time}</div>
      </div>
    )
  }
}

export default HourlyForecastCard