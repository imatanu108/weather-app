import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeatherData: {},
    multipleWeatherData: [],
    autoLocationSearchData: []
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCurrentWeatherData: (state, action) => {
            state.currentWeatherData = action.payload
        },
        setMultipleWeatherData: (state, action) => {
            state.multipleWeatherData = action.payload
        },
        setAutoLocationSearchData: (state, action) => {
            state.autoLocationSearchData = action.payload
        }
    }
})

export const { setCurrentWeatherData, setMultipleWeatherData, setAutoLocationSearchData } = weatherSlice.actions

export default weatherSlice.reducer