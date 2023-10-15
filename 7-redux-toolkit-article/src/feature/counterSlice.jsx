import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    count:10
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value += 1;
        },
        decrement:(state,action)=>{
            state.value -= 1;
        },
        increByPayload:(state,action)=>{
            state.value += action.payload;
        },
        decreByPayload:(state,{payload})=>{
            state.value -= payload;
        },
        incrementByCount:(state,action)=>{
            state.count += 1;
        },
    }
})

export const {increment,decrement,increByPayload,decreByPayload,incrementByCount} = counterSlice.actions
export default counterSlice.reducer