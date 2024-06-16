import { useState, useEffect } from "react";
import config from '../config/config'

function useMultipleWeatherInfo(location) {
    const [multipleWeatherData, setMultipleWeatherData] = useState([]);

    useEffect(() => {
        const fixedLocation = location.split(" ").join("%20")
        let requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${fixedLocation}`

        const fetchWeatherData = async () => {
            try {
                const response = await fetch(requestURL);
                const data = await response.json();
                // console.log("this is data",data);

                // checking if location is already added

                let filteredData = multipleWeatherData.filter((storedData) => storedData.location.name === data.location.name)

                // if refinedData.length > 0, that means the location is already in the dataset
                if (filteredData.length === 0) {
                    if (!data.error) {
                        setMultipleWeatherData((prev) => [...prev, data])
                    } else {
                        alert(data.error.message)
                    }
                } else {
                    alert("Location is already added!")
                }
            } catch (error) {
                console.error('Error fetching multiple weather data:', error);
            }
        };

        if (location) {
            fetchWeatherData();
        }
    }, [location])

    return multipleWeatherData;

}

export default useMultipleWeatherInfo