import { createSlice } from "@reduxjs/toolkit";

export const vaporCalcSlice = createSlice ({
    name: 'vaporCalc',
    initialState: false,
    reducers: {
        toggleVaporCalc: (state) => {return !state}
    }
})

export const { toggleVaporCalc } = vaporCalcSlice.actions
export const vaporCalcReducer = vaporCalcSlice.reducer