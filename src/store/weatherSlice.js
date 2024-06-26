import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeatherData: {},
    multipleWeatherData: []
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
        }
    }
})

export const { setCurrentWeatherData, setMultipleWeatherData } = weatherSlice.actions

export default weatherSlice.reducer