import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Routegaurd from '../components/Routegaurd'
import CreateContact from '../components/CreateContact'
import SingleContact from '../components/SingleContact'

const Path = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
            <Routegaurd>
              <Dashboard />
            </Routegaurd>
          }/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/createContact' element={<CreateContact/>}/>
                <Route path='/singleContact/:id' element={<SingleContact/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Path