import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMultipleWeatherData } from '../store/weatherSlice';
import useMultipleWeatherInfo from '../hooks/useMultipleWeatherInfo';

function MultipleSearch() {
    const [location, setLocation] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [locationList, setLocationList] = useState([]);
    const dispatch = useDispatch();
    const multipleWeatherData = useMultipleWeatherInfo(location);

    const getMultipleWeather = () => {
        if (inputLocation.trim() !== '') {
            setLocation(inputLocation)
            setInputLocation('')
        }
    };

    useEffect(() => {
        if (location !== '') {
            if (!locationList.includes(location)) {
                setLocationList(prev => [...prev, location]);
            }
        }
    }, [location])

    const resetLocations = () => {
        setLocation("Deleteing-Locations")
        setLocationList([]);
        console.log("reset")
    };

    // Dispatch weather data to Redux store when it updates
    useEffect(() => {
        if (multipleWeatherData) {
            dispatch(setMultipleWeatherData(multipleWeatherData));
        }
    }, [dispatch, multipleWeatherData]);

    // storing and restoring data in the local storage

    // // restoring
    useEffect(() => {
        const oldMultipleWeatherData = JSON.parse(localStorage.getItem("multipleWeatherData"));
        if (oldMultipleWeatherData) {
            dispatch(setMultipleWeatherData(oldMultipleWeatherData));
        }
    }, [])

    // storing
    useEffect(() => {
        localStorage.setItem("multipleWeatherData", JSON.stringify(multipleWeatherData))
    }, [multipleWeatherData])

    // directly restored in the useMultiple

    return (
        <>
            <div className='text-center my-4 mt-8 text-base'>
                Enter multiple location & <span className='font-semibold'>Compare weather!</span>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg mx-4 mt-2">
                <input
                    id="search-field"
                    type="text"
                    spellCheck="false"
                    value={inputLocation}
                    onChange={(e) => setInputLocation(e.target.value)}
                    className="h-10 w-80 p-3 border text-base text-gray-600 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    placeholder="Enter locations"
                />
                <div className="flex space-x-4">
                    <button
                        onClick={getMultipleWeather}
                        className="h-10 px-6 text-base bg-green-300 text-black rounded-3xl shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Search
                    </button>
                    <button
                        onClick={resetLocations}
                        className="h-10 px-6 text-base bg-cyan-300 text-gray-800 rounded-3xl shadow-md hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
}

export default MultipleSearch;
