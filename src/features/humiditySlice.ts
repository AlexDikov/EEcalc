import { createSlice } from "@reduxjs/toolkit";

export const humiditySlice = createSlice({
    name: 'humidity',
    initialState: 50,
    reducers: {
        setHumidity: (state, action) => {return action.payload}
    }
})

export const {setHumidity} = humiditySlice.actions
export const humidityReducer = humiditySlice.reducer