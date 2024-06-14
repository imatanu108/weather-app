import React, { useEffect } from 'react'
import { CurrentWeatherCard, HourlyForecast, SearchContainer } from './components/index'
import { useSelector } from 'react-redux'

function App() {
  const currentWeatherData = useSelector((state) => state.weather.currentWeatherData)

  let isday = true; // default value
  if (currentWeatherData && currentWeatherData.current) {
    isday = Boolean(currentWeatherData.current.is_day)
  }

  const title = isday ? 'Weather Updates 🌥️' : 'Weather Updates 🌙';

  return (
    <>
      <h1 id='page-title' className='text-4xl font-bold text-center'>{title}</h1>
      <SearchContainer />
      <CurrentWeatherCard />
      <HourlyForecast />
      <div className='text-center my-4'>© Made with Love💙</div>
    </>
  )
}

export default App
