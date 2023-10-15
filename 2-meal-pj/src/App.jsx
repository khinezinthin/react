import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Search from './components/Search'
// import Routegaurd from './components/Routegaurd'

const App = () => {
  return (
    <div>
      {/* <h1 className='text-4xl font-semibold text-pink-500 bg-gray-200 w-[300px] h-[100px] pt-[25px]'>App</h1>
      <p>App</p>
      <button className='px-5 py-1 bg-pink-600 rounded-full text-white shadow-lg mt-3'>update</button> */}

      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/search/:name' element={<Search/>}/>
        {/* <Route path='/search' element={<Routegaurd><Search/></Routegaurd>}/> */}
      </Routes>
    </div>
  )
}

export default App