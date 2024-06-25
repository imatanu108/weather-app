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
    <div className='flex flex-col items-center'>
      {multipleWeatherData.map((weatherData, index) => (
        <div key={index} className='my-4'>
          <CompareWeatherCard weatherData={weatherData} />
        </div>
      ))}
    </div>
  )
}

export default CompareWeatherList