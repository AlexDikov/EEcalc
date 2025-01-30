import { createSlice } from "@reduxjs/toolkit";

export const concreteWallSlice = createSlice ({
    name: 'concreteWall',
    initialState: false,
    reducers: {
        toggleConcreteWall: (state) => {return !state}
    }
})

export const { toggleConcreteWall } = concreteWallSlice.actions
export const concreteWallReducer = concreteWallSlice.reducer