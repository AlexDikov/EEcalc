import { createSlice } from "@reduxjs/toolkit";

export const humidityZoneSlice = createSlice({
    name: 'humidityZone',
    initialState: true,
    reducers: {
        setHumidityZone: (state, action) => {return action.payload}
    }
})

export const {setHumidityZone} = humidityZoneSlice.actions
export const humidityZoneReducer = humidityZoneSlice.reducer