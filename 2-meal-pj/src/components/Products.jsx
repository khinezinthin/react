import React, { useEffect, useState } from 'react'
import Card from './Card';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=> {
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const {meals}  = await api.json();
        setProducts(meals);
        // console.log(data.meals);
        // console.log(meals);
    }
  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20'>
        {products.map(product=>{
            return(
                // <div key={product.idMeal}>
                //     <img src={product.strMealThumb} className="w-[400px]  rounded-lg" />
                // </div>

                <Card key={product.idMeal} product={product}/>

            )
        })}
    </div>
  )
}

export default Products