import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Movie from './components/Movie'


const App = () => {
  const [popular,setPopular] = useState([])
  const [filtered,setFiltered] = useState([])
  const [activeGenre,setActiveGenre] = useState(0)
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async()=>{
    const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fff8973657a2509d6a6069478c0f9e39&language=en-US&page=1`)
    const {results} = await api.json()
    setPopular(results)
    setFiltered(results)
  }
  return (
    <div>
      <Filter popular={popular} setPopular={setPopular} filtered={filtered} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
      <div className='flex flex-wrap gap-6 justify-center'>
      {filtered.map(movie =>{
        return(
          <div key={movie.id}>
            <Movie movie={movie}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App