import { useState, useEffect } from "react";
import config from '../config/config'
import { useDispatch, useSelector } from "react-redux";

function useMultipleWeatherInfo(location) {
    // First checking if already any saved data is availabe in the local storage and restoring it
    const dispatch = useDispatch();
    const oldMultipleWeatherData = useSelector((state) => state.weather.multipleWeatherData);
    const [multipleWeatherData, setMultipleWeatherData] = useState(() => {
        const savedData = localStorage.getItem("multipleWeatherData");
        return savedData ? JSON.parse(savedData) : oldMultipleWeatherData;
    });

    useEffect(() => {
        // reset handler for locations
        if (location === 'Deleteing-Locations') {
            setMultipleWeatherData([])
        } else if (location) {
            const fixedLocation = location.split(" ").join("%20")
            let requestURL = `https://api.weatherapi.com/v1/forecast.json?key=${config.weatherApiKey}&q=${fixedLocation}&days=10&aqi=yes&alerts=yes`

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

        }

    }, [location])

    return multipleWeatherData;

}

export default useMultipleWeatherInfo