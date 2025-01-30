import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CityType } from "../app/types";

const initialState: CityType ={
name: '',
t: 0,
tm: 0,
z8: 0,
t8: 0,
z10: 0,
t10: 0,
w: 0,
vm: 0,
v: 0,
s: '',
}

export const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCity: (state, action: PayloadAction<CityType>) => {return  action.payload}
    }
})
export const {setCity} = citySlice.actions;
export const cityReducer = citySlice.reducer;