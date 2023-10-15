import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();
export const StateContextProvider = ({children})=>{
    const [filter,setFilter] = useState([])
    const [products,setProducts] = useState([])
    // const [categories,setCategories] = useState("")
    useEffect(()=>{
        fetchData()
        // fetchCategories()
    },[])
    const fetchData = async()=>{
        const api = await fetch(`https://dummyjson.com/products`)
        const {products} = await api.json()
        // console.log(products);
        setProducts(products)
        setFilter(products)
    }

    // const fetchCategories = async()=>{
    //     const api = await fetch(`https://dummyjson.com/products/categories`)
    //     const data = await api.json()
    //     // console.log(data);
    //     setCategories(data)
    // }
    // // console.log(categories);
    const data = {products,setProducts,filter,setFilter}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}
