import React, { useEffect } from 'react'

const Filter = ({popular,setPopular,filtered,setFiltered,activeGenre,setActiveGenre}) => {

    useEffect(()=>{
        if(activeGenre === 0){
            setFiltered(popular)
            return;
        }else{
            const filterMovie = popular.filter(movie => movie.genre_ids.includes(activeGenre))
            setFiltered(filterMovie)
        }
    },[activeGenre])

  return (
    <div className='flex my-5 gap-5 ml-20'>
        <button onClick={()=> setActiveGenre(0)} className='text-white bg-black px-5 py-1 rounded'>All</button>
        <button onClick={()=> setActiveGenre(28)} className='text-white bg-black px-5 py-1 rounded'>Actions</button>
        <button onClick={()=> setActiveGenre(35)} className='text-white bg-black px-5 py-1 rounded'>Comedy</button>
    </div>
  )
}

export default Filter