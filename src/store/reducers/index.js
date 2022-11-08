import { configureStore, createSlice } from "@reduxjs/toolkit";
import membersReducer from "./membersReducer.js";
import placesReducer from "./placesReducers.js";



const store = configureStore({
    reducer: {
        members: membersReducer,
        places: placesReducer
    }
})

export default store