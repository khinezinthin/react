import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StateContext } from '../context/StateContext'

// 4
// const Navbar = ({products,setProducts}) => {
//     const [input,setInput] = useState("")
//     // const [products,setProducts] = useState([]);
//     // const navigate = useNavigate()
//     // const onSubmit = (e)=>{
//     //     e.preventDefault();
//     //     navigate('/search', {state:{test:filter}})
//     // }
    
//     // useEffect(()=>{
//     //     fetchData()
//     // },[])
    
//     // const fetchData = async()=>{
//     //     const api = await fetch(`https://fakestoreapi.com/products`)
//     //     const data = await api.json()
//     //     setProducts(data)
//     //     console.log(data);
//     // }

//     const onSubmit =(e)=>{
//         e.preventDefault()
//         const filter = products.filter(pd => pd.title.toLowerCase().includes(input))
//         setProducts(filter)
//         console.log(filter);
//     }
    
//   return (
//     <div>
//         <div>
//             <div className='flex justify-around items-center rounded shadow p-7'>
//                 <Link to={"/"}>
//                 <h3 className='text-2xl font-bold'>Comfifty</h3>
//                 </Link>
//                 <div>
//                     <form onSubmit={onSubmit}>
//                         <input onChange={(e)=> setInput(e.target.value)} type="text" className='outline-none border-b-2 border-black' />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

const Navbar = () => {
    const [input,setInput] = useState("")
    const {items,setItems} = useContext(StateContext)

    const onSubmit =(e)=>{
        e.preventDefault()
        const filter = items.filter(pd => pd.title.toLowerCase().includes(input))
        setItems(filter)
        console.log(filter);
    }
    
  return (
    <div>
        <div>
            <div className='flex justify-around items-center rounded shadow p-7'>
                {/* <Link to={"/"}> */}
                <h3 className='text-2xl font-bold'>Comfifty</h3>
                {/* </Link> */}
                <div>
                    <form onSubmit={onSubmit}>
                        <input onChange={(e)=> setInput(e.target.value)} type="text" className='outline-none border-b-2 border-black' />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar