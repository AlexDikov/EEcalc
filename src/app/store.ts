import { configureStore } from "@reduxjs/toolkit";
import {cityReducer } from "../features/citySlice"
import { buildingAimReducer } from "../features/buildingAimSlice";
import { buildingTypeReducer } from "../features/buildingTypeSlice";
import { objNameReducer } from "../features/objNameSlice";
import { objAddressReducer } from "../features/objAddressSlice";
import { concreteWallReducer } from "../features/concreteWall";
import { innerTempReducer } from "../features/innerTempSLice";
import { humidityReducer } from "../features/humiditySlice";
import { vaporCalcReducer } from "../features/vaporCalcSLice";
import { mrReducer } from "../features/mrSlice";


export default configureStore({
  reducer: {
    buildingAim: buildingAimReducer,
    buildingType: buildingTypeReducer,
    city: cityReducer,
    concreteWall: concreteWallReducer,
    humidity: humidityReducer,
    innerTemp: innerTempReducer,
    mr: mrReducer,
    objAddress: objAddressReducer,
    objName: objNameReducer,
    vaporCalc: vaporCalcReducer,
  },
});