import React, { useState, useEffect } from 'react'
import useWeatherInfo from '../hooks/useWeatherInfo'
import useAutoLocationSearch from '../hooks/useAutoLocationSearch';
import { useDispatch } from 'react-redux'
import { setCurrentWeatherData } from '../store/weatherSlice';
import { AutoSearchCard } from './index'

function SearchContainer() {
    const [location, setLocation] = useState('');
    const [currentLocation, setCurrentLocation] = useState('new delhi');
    const weatherData = useWeatherInfo(currentLocation);
    const autoLocationSearchData = useAutoLocationSearch(location);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const dispatch = useDispatch();

    const getWeather = () => {
        if (location.trim() !== '') {
            setCurrentLocation(location.trim());
            setLocation('');
            setShowSuggestions(false) 
        }
    };

    // Re-fetch the weather for the current location
    const refreshWeather = () => {
        setCurrentLocation(prevLocation => (prevLocation + " "));
    };
    // adding " " at the end to change the state of currentLocation with the same location, passing same location implicitly will not change the state

    // dispatching current weather data into store
    useEffect(() => {
        if (weatherData) {
            dispatch(setCurrentWeatherData(weatherData))
        }
    }, [weatherData, location, currentLocation])

    // auto-search location click handler
    const locationClickHandler = (e) => {
        let selectedLocation = e.target.innerText
        setCurrentLocation(selectedLocation);
        setLocation('')
        setShowSuggestions(false) // stop showing suggestions now
    }

    // storing and restoring data in local-storage
    //restoring
    useEffect(() => {
        const oldLocation = localStorage.getItem("currentLocation")
        if (oldLocation) {
            setCurrentLocation(oldLocation);
        }
    }, [])

    // storing
    useEffect(() => {
        localStorage.setItem("currentLocation", currentLocation)
    }, [currentLocation])

    return (
        <>
            <div className='text-center my-4 mt-8 text-base md:text-base'>
                Enter your location & <span className='text-lime-300'>Stay Updated!</span>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg mx-4 m-t-1">
                <input
                    id="search-field"
                    type="text"
                    spellCheck="false"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value)
                        setShowSuggestions(true) // start showing suggestions again
                    }}
                    className="h-10 w-80 p-3 border text-base text-gray-600 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    placeholder="Enter your location"
                    autoComplete='off'
                />
                <div className="flex space-x-4">
                    <button
                        onClick={getWeather}
                        className="h-10 px-6 text-base bg-green-300 text-gray-800 rounded-3xl shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Search
                    </button>
                    <button
                        onClick={refreshWeather}
                        className="h-10 px-6 text-base bg-cyan-300 text-gray-800 rounded-3xl shadow-md hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Refresh
                    </button>
                </div>
            </div>
            {showSuggestions && (
                <div className="flex justify-center p-2 rounded-lg">
                    <AutoSearchCard autoSearchData={autoLocationSearchData} onClickHandler={locationClickHandler} />
                </div>
            )}
        </>
    )
}

export default SearchContainer;
