import { createSlice } from "@reduxjs/toolkit";

export const objNameSlice = createSlice({
    name: 'objName',
    initialState: '',
    reducers: {
        setObjName: (state, action) => {return action.payload}
    }
})

export const { setObjName } = objNameSlice.actions;
export const objNameReducer = objNameSlice.reducer;