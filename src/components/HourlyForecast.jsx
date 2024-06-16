import React from 'react';
import { useSelector } from 'react-redux';
import HourlyForecastCard from './HourlyForecastCard';

function HourlyForecast() {
    const currentWeatherData = useSelector((state) => state.weather.currentWeatherData);
    const forcastWeather = currentWeatherData.forecast

    if (!forcastWeather) {
        return null; // Handles the case when data is not yet available can return loading component
    }

    return (
        <>
            <h3 className='m-3 text-xl font-medium text-center'>Hourly Forecast →</h3>
            <div className='scroll-container flex overflow-x-auto space-x-4 mx-2 my-4 p-4'>
                {forcastWeather.forecastday[0].hour.map((data, index) => (
                    <div key={index} className="flex-shrink-0">
                        <HourlyForecastCard hourlyData={data} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default HourlyForecast;
