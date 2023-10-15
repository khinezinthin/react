import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../context/StateContext';
import Card from './Card';

// 1
// const Products = ({items}) => {
//     // const [products,setProducts] = useState([]);
//     // useEffect(()=>{
//     //     fetchData()
//     // },[])
//     // const fetchData = async()=>{
//     //     const api = await fetch(`https://fakestoreapi.com/products`)
//     //     const data = await api.json()
//     //     setProducts(data)
//     //     console.log(data);
//     // }
//   return (
//     <div className='flex flex-wrap gap-10 justify-center items-center my-10'>
//         {items.map(product=>{
//             return(
//                 <Card key={product.id} {...product}/>
//             )
//         })}
//     </div>
//   )
// }
// export default Products


// 4
const Products = () => {
const {items,setItems} = useContext(StateContext)
return (
  <div className='flex flex-wrap gap-10 justify-center items-center my-10'>
      {items.map(item=>{
          return(
              <Card key={item.id} {...item}/>
              // <p>{item.title}</p>
          )
      })}
  </div>
)
}

export default Products