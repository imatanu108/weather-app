import React from 'react'
import { useSelector } from 'react-redux'
import CompareWeatherCard from './CompareWeatherCard';

function CompareWeatherList() {
  const multipleWeatherData = useSelector((state) => state.weather.multipleWeatherData)
  console.log("This is the multiple weather data:", multipleWeatherData);

  if (!multipleWeatherData) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <>
      {multipleWeatherData.map((weatherData, index) => (
        <div key={index}>
          <CompareWeatherCard weatherData={weatherData}/>
        </div>
      ))}
    </>
  )
}

export default CompareWeatherList