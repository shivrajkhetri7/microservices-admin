import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sampleSlice } from "../slice/sampleSlice";

// Add all your reducers under the cReducers function 
const cReducers = combineReducers({
    samplevalue: sampleSlice.reducer
})
export const store = configureStore({
    reducer: cReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch