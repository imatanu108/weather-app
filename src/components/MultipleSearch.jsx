import React, { useState, useEffect, useTransition } from 'react'
import { useDispatch } from 'react-redux'
import { setMultipleWeatherData } from '../store/weatherSlice';
import useMultipleWeatherInfo from '../hooks/useMultipleWeatherInfo';

function MultipleSearch() {
    const [location, setLocation] = useState('');
    const [locationList, setLocationList] = useState([])
    const [currLocationList, setCurrLocationList] = useState([])
    const dispatch = useDispatch()
    const multipleWeatherData = useMultipleWeatherInfo(currLocationList)

    const getMultipleWeather = () => {
        setLocationList((prev) => [...prev, location])
        setCurrLocationList(locationList)
        console.log("This is location list", locationList)
        setLocation('');
    };

    const updateMultipleWeather = () => {
        setCurrLocationList(currLocationList)
    }

    // dispatching current weather data into store

    useEffect(() => {
        if (multipleWeatherData) {
            dispatch(setMultipleWeatherData(multipleWeatherData))
            console.log("This is the weather data of multiple locations", multipleWeatherData)
        }
    }, [multipleWeatherData, locationList, currLocationList])

    return (
        <>
            <div className='text-center mt-8 text-base'>
                Compare with other location.
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg mx-4 mt-2 mb-7 pb-3">
                <input
                    id="search-field"
                    type="text"
                    spellCheck="false"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-10 w-80 p-3 border text-base text-gray-600 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    placeholder="Enter location"
                />
                <div className="flex space-x-4">
                    <button
                        onClick={getMultipleWeather}
                        className="h-10 px-6 text-base bg-green-300 text-black rounded-3xl shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Add Location
                    </button>
                    <button
                        onClick={updateMultipleWeather}
                        className="h-10 px-6 text-base bg-cyan-300 text-gray-800 rounded-3xl shadow-md hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Refresh
                    </button>
                </div>
            </div>
        </>
    )
}

export default MultipleSearch;
