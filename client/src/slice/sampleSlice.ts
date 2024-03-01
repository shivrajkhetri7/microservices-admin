import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//this is sample slice and keep all slice in this file

export interface sampleValue {
    value:number
}

const initialState:sampleValue = {
    value:0
}

export const sampleSlice = createSlice({
    name:'sample',
    initialState,
    reducers:{
        setValue:(state, action:PayloadAction<number>)=>{
            state.value = action.payload
        }
    }
})

export const {setValue} = sampleSlice.actions