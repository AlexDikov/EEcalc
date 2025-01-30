import { createSlice } from "@reduxjs/toolkit";

export const buildingAimSlice = createSlice({
    name: 'buildingAim',
    initialState: 1,
    reducers: {
      setBuildingAim: (state, action) => {
        return action.payload;
      },
    },
  });

  export const { setBuildingAim } = buildingAimSlice.actions;
  export const buildingAimReducer = buildingAimSlice.reducer;