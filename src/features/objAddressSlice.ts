import { createSlice } from "@reduxjs/toolkit";

export const objAddressSlice = createSlice({
    name: 'objAddress',
    initialState: '',
    reducers: {
        setObjAddress: (state, action) => {return action.payload}
    }
})

export const { setObjAddress } = objAddressSlice.actions;
export const objAddressReducer = objAddressSlice.reducer;