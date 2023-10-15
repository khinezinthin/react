import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
// import Register from '../pages/Register'
// import Routegaurd from '../component/Routegaurd'
// import SingleContact from '../component/SingleContact'
// import CreateContact from '../component/CreateContact'

const Path = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Routegaurd><Dashboard/></Routegaurd>}/> */}
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/register' element={<Register/>}/>
          <Route path='/singleContact/:id' element={<SingleContact/>}/>
          <Route path='/createContact' element={<CreateContact/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Path