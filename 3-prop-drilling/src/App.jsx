import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Four from './components/Four'
import MovieList from './components/MovieList'
import MovieNavbar from './components/MovieNavbar'
import Navbar from './components/Navbar'
import One from './components/One'
import Products from './components/Products'
import Search from './components/Search'
import Three from './components/Three'
import Two from './components/Two'
import { StateContext } from './context/StateContext'

// 1
// const App = () => {
//   const [products,setProducts] = useState([]);
//     useEffect(()=>{
//         fetchData()
//     },[])
//     const fetchData = async()=>{
//         const api = await fetch(`https://fakestoreapi.com/products`)
//         const data = await api.json()
//         setProducts(data)
//         console.log(data);
//     }
//   return (
//     <div>
//       <Navbar products={products} setProducts={setProducts}/>
//       <Routes>
//         <Route path='/' element={<Products items={products}/>}/>
//         <Route path='/detail/:id' element={<Detail/>}/>
//         <Route path='/search' element={<Search/>}/>
//       </Routes>
//     </div>
//   )
// }

// 2
// const App = () => {
//   // const {name} = useContext(StateContext)
//   // console.log(name);
//   return (
//     <div>
//       <MovieNavbar/>
//       <MovieList/>
//     </div>
//   )
// }

// 3
// const App = () => {
  
//   return (
//     <div>
//       <One/>
//       <Two/>
//       <Three/>
//       <Four/>
//     </div>
//   )
// }

// 4
const App = () => {
  return (
    <div>
      <Navbar/>
      <Products/>
    </div>
  )
}



export default App