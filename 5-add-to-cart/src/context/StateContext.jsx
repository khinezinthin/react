import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";

export const StateContext = createContext();
export const StateContextProvider = ({children})=>{
    const [search,setSearch] = useState('');
    const [productsList,setProductsList] = useState([]);
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
        const api = await fetch(`https://fakestoreapi.com/products/`);
        const data = await api.json();
        setProductsList(data)
        // console.log(data);
    }
    const initialState = {
        products:[],
        cart:[]
    };
    useEffect(()=>{
        dispatch({type:"GET_PRODUCT",payload:productsList})
        const filter = productsList.filter(pd => pd.title.toLowerCase().includes(search))
        dispatch({type:"GET_PRODUCT",payload:filter})
    },[productsList,search])
    const [state,dispatch] = useReducer(reducer,initialState)
    const data = {state,dispatch,search,setSearch}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = ()=> useContext(StateContext)