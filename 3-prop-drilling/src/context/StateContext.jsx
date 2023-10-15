// 2
// import { createContext, useState } from "react";

import { createContext, useEffect, useState } from "react";

// export const StateContext = createContext();
// export const StateContextProvider = ({children})=>{
//     const [movies,setMovies] =useState([
//         {id:1,name:"Doctor Strange",price:"50"},
//         {id:2,name:"Iron Man",price:"70"},
//         {id:3,name:"Harry Potter",price:"90"},
//         {id:4,name:"Super Man",price:"30"},
//         {id:5,name:"CC",price:"50"},
//         {id:6,name:"DD",price:"50"},
//     ])
//     const name = "kzt"
//     const data = {name,movies,setMovies}
//     return(
//         <StateContext.Provider value={data}>
//             {children}
//         </StateContext.Provider>
//     )
// }

// 3
// export const StateContext = createContext();
// export const StateContextProvider = ({children})=>{
//     const [count,setCount] = useState(0)
//     const data = {count,setCount}
//     return(
//         <StateContext.Provider value={data}>
//             {children}
//         </StateContext.Provider>
//     )
// }

// 4
export const StateContext = createContext();
export const StateContextProvider = ({children})=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
        const api = await fetch(`https://fakestoreapi.com/products`)
        const data = await api.json()
        setItems(data)
        // console.log(data);
    }
    const data = {items,setItems}
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}