import { createSlice } from "@reduxjs/toolkit";

export const innerTempSlice = createSlice({
    name: 'innerTemp',
    initialState: 20,
    reducers: {
        setInnerTemp: (state, action) => {return action.payload}
    }
})

export const {setInnerTemp} = innerTempSlice.actions
export const innerTempReducer = innerTempSlice.reducer