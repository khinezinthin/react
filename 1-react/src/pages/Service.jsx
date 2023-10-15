import React, { useEffect, useState } from 'react'
import Meal from "../Meal";


const Service = () => {
 
  const[items,setItems] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async() =>{
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const json = await api.json(api.meal)
    const data = json.meals
    console.log(data);
    setItems(data)
  }
  return (
    <div>
      <h1>service</h1>

      {items.map(item => (
        <Meal key={item.idMeal} meal={item}/>
      ))}
    </div>
  )
}

export default Service