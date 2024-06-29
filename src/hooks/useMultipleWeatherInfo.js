import { useState, useEffect } from "react";
import config from '../config/config';

function useMultipleWeatherInfo(locationList) {
    const [multipleWeatherData, setMultipleWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const weatherData = [];
            const fetchedLocations = new Set();

            await Promise.all(locationList.map(async (location) => {
                if (location) {
                    const fixedLocation = location.split(" ").join("%20");
                    const requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${fixedLocation}&days=10&aqi=yes&alerts=yes`;

                    try {
                        const response = await fetch(requestURL);
                        const data = await response.json();

                        if (!data.error && !fetchedLocations.has(data.location.name)) {
                            weatherData.push(data);
                            fetchedLocations.add(data.location.name);
                        } else if (data.error) {
                            console.error(data.error.message);
                        }
                    } catch (error) {
                        console.error('Error fetching multiple weather data:', error);
                    }
                }
            }));

            setMultipleWeatherData(weatherData);
        };

        fetchWeatherData();
    }, [locationList]);

    return multipleWeatherData;
}

export default useMultipleWeatherInfo;
