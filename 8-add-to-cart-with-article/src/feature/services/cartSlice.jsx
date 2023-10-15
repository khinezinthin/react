import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const initialState = {
    totalAmount:0,
    quantity:0,
    cart:[]
}
// const STORAGE_KEY = "cart"
const storeItems = Cookies.get("cart")

const calculateTotalAmount = (cart)=>{
    return cart.reduce((total,item) => total+item.price * item.quantity,0)
}
const calculateQuantity = (cart)=>{
    return cart.reduce((total,item) => total+item.quantity,0)
}

if(storeItems){
    initialState.cart = JSON.parse(storeItems)
    initialState.totalAmount = calculateTotalAmount(initialState.cart)
    initialState.quantity = calculateQuantity(initialState.cart)
}
export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,{payload}) =>{
            const isExisted = state.cart.find(item=> item.id === payload.id)
            if(isExisted){
                return state
            }else{
                state.cart = [...state.cart,{...payload,quantity:1}]
            }
            // state.totalAmount += payload.price;    
            // state.quantity ++;
            state.totalAmount = calculateTotalAmount(state.cart)
            state.quantity = calculateQuantity(state.cart)
            Cookies.set("cart",JSON.stringify(state.cart))
        },

        removeFromCart:(state,{payload}) =>{
            state.cart = state.cart.filter(item => item.id !== payload.id)
            // state.totalAmount -= payload.price * payload.quantity;
            // state.quantity --;
            state.totalAmount = calculateTotalAmount(state.cart)
            state.quantity = calculateQuantity(state.cart)
            Cookies.set("cart",JSON.stringify(state.cart))
        },

        addItemsQuantity:(state,{payload}) =>{
            state.cart = state.cart.map(item=>{
                if(item.id === payload.id){
                    return{...item, quantity: item.quantity+1}
                }else{
                    return item
                }
            })
            // state.totalAmount += payload.price
            // state.quantity ++;
            state.totalAmount = calculateTotalAmount(state.cart);
            state.quantity = calculateQuantity(state.cart);
            Cookies.set("cart", JSON.stringify(state.cart));
            // Cookies.set("totalAmount", state.totalAmount)
            // console.log("New total amount:", state.totalAmount);
        },

        takeItemsQuantity:(state,{payload})=>{
            state.cart = state.cart.map(item=>{
                if(item.id === payload.id){
                    return {...item, quantity: item.quantity-1}
                }
                else{
                    return item
                }
            })
            // state.totalAmount -= payload.price
            // state.quantity --;
            state.totalAmount = calculateTotalAmount(state.cart);
            state.quantity = calculateQuantity(state.cart);
            Cookies.set("cart", JSON.stringify(state.cart));
            // Cookies.set("totalAmount", state.totalAmount)
        }
    }
})

export const {addToCart,removeFromCart,addItemsQuantity,takeItemsQuantity} = cartSlice.actions
export default cartSlice.reducer