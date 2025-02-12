import { configureStore } from "@reduxjs/toolkit";
import firstFormReducer from "./slices/firstForm";



export default configureStore ({
    reducer: {
        firstForm: firstFormReducer
    }
})