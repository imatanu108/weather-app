import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeatherData: {}
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCurrentWeatherData: (state, action) => {
            state.currentWeatherData = action.payload
        }
    }
})

export const { setCurrentWeatherData } = weatherSlice.actions

export default weatherSlice.reducer