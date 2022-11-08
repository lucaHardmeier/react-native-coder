import { configureStore, createSlice } from "@reduxjs/toolkit";
import entriesReducer from "./entriesReducer.js";
import membersReducer from "./membersReducer.js";
import placesReducer from "./placesReducers.js";



const store = configureStore({
    reducer: {
        members: membersReducer,
        places: placesReducer,
        entries: entriesReducer
    }
})

export default store