import { createSlice } from "@reduxjs/toolkit";

export const firstForm = createSlice({
    name: 'firstForm',
    initialState: {
    },
    reducers: {
        setFirstForm: (state, action) => { console.log(action.payload); return  action.payload}
    }
})

export const {setFirstForm} = firstForm.actions

export default firstForm.reducer