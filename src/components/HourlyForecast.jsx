import React from 'react';
import { useSelector } from 'react-redux';
import HourlyForecastCard from './HourlyForecastCard';

function HourlyForecast() {
    const currentWeatherData = useSelector((state) => state.weather.currentWeatherData);
    const forecastWeather = currentWeatherData.forecast

    if (!forecastWeather) {
        return null; // Handles the case when data is not yet available can return loading component
    }

    return (
        <>
            <h3 className='m-2 text-xl font-medium text-center'>Hourly Forecast →</h3>
            <div>
                {forecastWeather.forecastday.map((dailyData, dayIndex) => {
                    let forecastDate = ''
                    if (dayIndex === 0) {
                        forecastDate = "Today"
                    } else if (dayIndex === 1) {
                        forecastDate = "Tommorow"
                    } else {
                        forecastDate = dailyData.date
                    }
                    return (
                        <div key={dayIndex}>
                            <div className='m-3 p-1 rounded-xl text-base font-medium text-center bg-[rgba(106,133,156,0.23)]'>{forecastDate}</div>
                            <div className='scroll-container flex overflow-x-auto space-x-4 mx-2 mt-1 mb-4 px-2 pt-1 pb-3'>
                                {dailyData.hour.map((data, hourIndex) => (
                                    <div key={hourIndex} className="flex-shrink-0">
                                        <HourlyForecastCard hourlyData={data} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default HourlyForecast;
