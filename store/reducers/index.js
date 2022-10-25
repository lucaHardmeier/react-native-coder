import { configureStore, createSlice } from "@reduxjs/toolkit";
import peopleReducer from "./peopleReducer.js";
import placesReducer from "./placesReducers.js";



const store = configureStore({
    reducer: {
        people: peopleReducer,
        places: placesReducer
    }
})

export default store