import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BuildingTypeType } from "../app/types";

export const buildingTypeSlice = createSlice({
    name: 'buildingType',
    initialState: 1,
    reducers: {
      setBuildingType: (state, action: PayloadAction<BuildingTypeType>) => {
        return action.payload;
      },
    },
  });

  export const { setBuildingType } = buildingTypeSlice.actions;
  export const buildingTypeReducer = buildingTypeSlice.reducer;