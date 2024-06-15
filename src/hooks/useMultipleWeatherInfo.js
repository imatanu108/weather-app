import { useState, useEffect } from "react";
import config from '../config/config'

function useMultipleWeatherInfo(locationList) {
    const [multipleWeatherData, setMultipleWeatherData] = useState([]);

    useEffect(() => {
        locationList.map((location) => {
            const fixedLocation = location.split(" ").join("%20")
            let requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${fixedLocation}`
    
            const fetchWeatherData = async () => {
                try {
                    const response = await fetch(requestURL);
                    const data = await response.json();
                    // console.log("this is data",data);
                    if (!data.error) {
                        setMultipleWeatherData((prev) => [...prev, data])                    
                    } else {
                        alert(data.error.message)
                    }
                } catch (error) {
                    console.error('Error fetching multiple weather data:', error);
                }
            };
    
            if (location) {
                fetchWeatherData();
            }
        })
    }, [locationList])

    return multipleWeatherData;

}

export default useMultipleWeatherInfo