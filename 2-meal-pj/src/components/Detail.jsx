import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BsYoutube} from 'react-icons/Bs'

const Detail = () => {
    const {id} = useParams();
    const [recipe,setRecipe] = useState({});
    const [ingre,setIngre] = useState([]);

    useEffect(()=>{
        const ingredient = [
            {id:1 , name:recipe.strIngredient1},
            {id:2 , name:recipe.strIngredient2},
            {id:3 , name:recipe.strIngredient3},
            {id:4 , name:recipe.strIngredient4},
            // {id:5 , name:recipe.strIngredient5},
            // {id:6 , name:recipe.strIngredient6},
            // {id:7 , name:recipe.strIngredient7},
        ]
        setIngre(ingredient);
    },[recipe])
        // console.log(ingre);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json();
        setRecipe(meals[0]);
        console.log(meals[0]);
        // const data = await api.json();
        // setRecipe(data.meals[0]);
        // console.log(data.meals[0]);  

    }
  return (
    <div className='flex flex-wrap justify-around h-screen items-center'>
        <img className='w-[500px] rounded' src={recipe.strMealThumb} alt="" />
        <div className='w-[50%]'>
            <h2 className='text-3xl text-gray-600 font-semibold tracking-wide my-3'>{recipe.strMeal}</h2>
            <p className='text-2xl text-gray-600 font-semibold tracking-wide mb-4'>{recipe.strArea}</p>
            <p className='text-gray-500 tracking-wide leading-8'>{recipe.strInstructions}</p>
            {ingre.map(item => {
                return(
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                )
            })}

            <a href={recipe.strYoutube}>
                <BsYoutube className='text-4xl text-red-600 mb-4'/>
            </a>

            
        </div>
    </div>
  )
}

export default Detail