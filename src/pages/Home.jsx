import React from 'react'
import {
    CurrentWeatherCard,
    HourlyForecast,
    SearchContainer
} from '../components/index'

function Home() {
    return (
        <div>
            <SearchContainer />
            <CurrentWeatherCard />
            <HourlyForecast />
        </div>
    )
}

export default Home