import { useEffect, useState } from 'react'
import config from '../config/config'

function useAutoLocationSearch(location) {
    const [autoLocationSearchData, setAutoLocationSearchData] = useState([])
    const fixedLocation = location.split(" ").join("%20")
    let requestURL = `https://api.weatherapi.com/v1/search.json?key=${config.weatherApiKey}&q=${fixedLocation}`

    useEffect(() => {
        const fetchAutoLocationSearchData = async () => {
            try {
                const response = await fetch(requestURL);
                console.log(requestURL)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data) setAutoLocationSearchData(data);
            } catch (error) {
                console.error('Error fetching auto search data:', error);
            }
        }

        if (location) {
            fetchAutoLocationSearchData();
        }

    }, [location])
    
    return autoLocationSearchData;
}

export default useAutoLocationSearch