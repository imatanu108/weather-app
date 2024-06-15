import React from 'react'
import { 
    CompareWeatherList,
    CurrentWeatherCard,
    MultipleSearch,
    SearchContainer
} from '../components/index'

function ComparePage() {
    return (
        <div>
            <SearchContainer />
            <MultipleSearch />
            <CurrentWeatherCard />
            <CompareWeatherList />
        </div>
    )
}

export default ComparePage