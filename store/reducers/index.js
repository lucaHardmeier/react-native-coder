import { configureStore, createSlice } from "@reduxjs/toolkit";
import peopleReducer from "./peopleReducer.js";



const store = configureStore({
    reducer: peopleReducer
})

export default store