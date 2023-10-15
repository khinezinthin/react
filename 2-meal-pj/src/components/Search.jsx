import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Search = () => {
    const {name} = useParams();

    // const location = useLocation()
    // // console.log(location.state.test);
    // const name = location?.state?.test;
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const {meals} = await api.json();
        setItems(meals);
        console.log(meals);
    }
  return (
    <div>
        {items.map(item =>{
            return(
                <div key={item.idMeal}>
                    <img src={item.strMealThumb} alt="" />
                    <p>{item.strMeal}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Search