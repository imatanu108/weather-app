import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMultipleWeatherData } from '../store/weatherSlice';
import useMultipleWeatherInfo from '../hooks/useMultipleWeatherInfo';
import { setCurrentWeatherData, setAutoLocationSearchData } from '../store/weatherSlice';
import { AutoSearchCard } from './index'
import useAutoLocationSearch from '../hooks/useAutoLocationSearch';

function MultipleSearch() {
    const [location, setLocation] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [locationList, setLocationList] = useState([]);
    const dispatch = useDispatch();
    const multipleWeatherData = useMultipleWeatherInfo(location);
    const autoLocationSearchData = useAutoLocationSearch(inputLocation);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const currentAutoSearchData = useSelector((state) => state.weather.autoLocationSearchData);

    const getMultipleWeather = () => {
        if (inputLocation.trim() !== '') {
            setLocation(inputLocation)
            setInputLocation('')
            dispatch(setAutoLocationSearchData([]))
            setShowSuggestions(false)
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

    // dispatching auto-location-search data in the store
    useEffect(() => {
        dispatch(setAutoLocationSearchData(autoLocationSearchData))
    }, [inputLocation])

    // auto-search location click handler
    const locationClickHandler = (e) => {
        let selectedLocation = e.target.innerText
        setInputLocation(selectedLocation);
        dispatch(setAutoLocationSearchData([]))
        setShowSuggestions(false)
    }

    return (
        <>
            <div className='text-center my-4 mt-8 text-sm md:text-base'>
                Enter multiple location & <span className='text-lime-300'>Compare weather!</span>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4 p-2 rounded-lg mx-4 mt-2">
                <input
                    id="search-field"
                    type="text"
                    spellCheck="false"
                    value={inputLocation}
                    onChange={(e) => {
                        setInputLocation(e.target.value)
                        setShowSuggestions(true)
                    }}
                    className="h-9 md:h-10 w-72 md:w-80 p-3 border text-base text-gray-600 border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                    placeholder="Enter locations"
                    autoComplete='off'
                />
                <div className="flex space-x-4">
                    <button
                        onClick={getMultipleWeather}
                        className="h-9 md:h-10 px-6 text-base bg-green-300 text-gray-800 rounded-3xl shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Search
                    </button>
                    <button
                        onClick={resetLocations}
                        className="h-9 md:h-10 px-6 text-base bg-cyan-300 text-gray-800 rounded-3xl shadow-md hover:bg-cyan-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Reset
                    </button>
                </div>
            </div>
            {showSuggestions && (
                <div className="flex justify-center p-2 rounded-lg">
                    <AutoSearchCard autoSearchData={currentAutoSearchData} onClickHandler={locationClickHandler} />
                </div>
            )}
        </>
    );
}

export default MultipleSearch;
