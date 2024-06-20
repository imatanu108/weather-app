import React from 'react'
import { useSelector } from 'react-redux'
import CompareWeatherCard from './CompareWeatherCard';
import { Loading } from './index'

function CompareWeatherList() {
  const multipleWeatherData = useSelector((state) => state.weather.multipleWeatherData)
  console.log("This is the multiple weather data:", multipleWeatherData);

  if (!multipleWeatherData) {
    return <Loading />;
  }

  return (
    <>
      {multipleWeatherData.map((weatherData, index) => (
        <div key={index}>
          <CompareWeatherCard weatherData={weatherData} />
        </div>
      ))}
    </>
  )
}

export default CompareWeatherList