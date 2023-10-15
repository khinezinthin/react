import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
import Movie from './Movie'

const MovieList = () => {
    // const [movies,setMovies] =useState([
    //     {id:1,name:"Doctor Strange",price:"50"},
    //     {id:2,name:"Iron Man",price:"70"},
    //     {id:3,name:"Harry Potter",price:"90"},
    //     {id:4,name:"Super Man",price:"30"},
    //     {id:5,name:"CC",price:"50"},
    //     {id:6,name:"DD",price:"50"},
    // ])

    // const abc = useContext(StateContext)
    // console.log(abc);
    // console.log(abc.name);

    const {movies} = useContext(StateContext)
  return (
    <div className='mx-auto w-1/2 mt-20'>
        {movies.map(movie=>{
            return(
                <Movie key={movie.id} movie={movie}/>
            )
        })}
    </div>
  )
}

export default MovieList