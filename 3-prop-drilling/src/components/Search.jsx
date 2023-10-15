import React from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const location = useLocation()
    console.log(location.state.test);
    const pd = location?.state.test[0];
  return (
    <div>
        {/* <p>{location?.state.test}</p> */}
        <p>{pd?.title}</p>
    </div>
  )
}

export default Search