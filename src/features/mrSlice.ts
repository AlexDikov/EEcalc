import { createSlice } from "@reduxjs/toolkit";

export const mrSlice = createSlice({
    name: 'mr',
    initialState: 0,
    reducers: {
        setMr: (state, action) => {return action.payload}
    }
})

export const {setMr} = mrSlice.actions
export const mrReducer = mrSlice.reducer