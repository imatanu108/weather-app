import { useState, useEffect } from "react";
import config from '../config/config'

function useWeatherInfo(location) {
    const [weatherData, setWeatherData] = useState({})
    const fixedLocation = location.split(" ").join("%20")
    let requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${fixedLocation}`

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(requestURL);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        if (location) {
            fetchWeatherData();
        }
    }, [location]);

    return weatherData
}

export default useWeatherInfo