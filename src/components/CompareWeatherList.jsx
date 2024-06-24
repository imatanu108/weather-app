import React from 'react'
import { useSelector } from 'react-redux'
import CompareWeatherCard from './CompareWeatherCard';
import { Loading } from './index'

function CompareWeatherList() {
  const multipleWeatherData = useSelector((state) => state.weather.multipleWeatherData)

  if (!multipleWeatherData) {
    return <Loading />;
  }

  return (
    <div className='md:flex md:flex-col items-center'>
      {multipleWeatherData.map((weatherData, index) => (
        <div key={index} className='mb-8 md:mb-0'>
          <CompareWeatherCard weatherData={weatherData} />
        </div>
      ))}
    </div>
  )
}

export default CompareWeatherList