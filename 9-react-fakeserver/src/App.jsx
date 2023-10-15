import React from 'react'
import { Route, Routes } from "react-router-dom";
import Blog from './component/Blog';
import Detail from './component/Detail';
import CreateBlog from './component/CreateBlog';
import Edit from './component/Edit';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App