import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const MovieNavbar = () => {
  const {movies} = useContext(StateContext)
  return (
    <div className='flex justify-around items-center bg-slate-400 text-white border rounded p-5'>
      <h2>MMS</h2>
      <p>Movie : {movies.length}</p>
    </div>
  )
}

export default MovieNavbar