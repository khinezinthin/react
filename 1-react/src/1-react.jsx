import React from 'react'
import './1-react.css'
import Home from "./Home"

const App = () => {
  // const name = "khine zin thin";
  // const nums = [1,2,3,4,5];
  // const users =[
  //   {name: "ma ma",age: 20},
  //   {name: "mg mg",age: 18},
  //   {name: "mya mya",age: 25},
  // ]

  const products = [
    {
      img: "https://i.pinimg.com/564x/78/e6/6b/78e66b0d99c10ccf652dd9ccb354936a.jpg",
      title: "Product One",
      description: "Description"
    },
    {
      img: "https://i.pinimg.com/236x/27/79/54/27795470025f000519d21582cacd1ca4.jpg",
      title: "Product Two",
      description: "Description"
    },
    {
      img: "https://i.pinimg.com/236x/0e/14/c7/0e14c7c70fe152fb2b5b5ce3fb19883c.jpg",
      title: "Product Three",
      description: "Description"
    },
  ]
  return (
    <div>
      {/* <h1>hello world</h1>
      <h1>{name}</h1>
      {nums.map(num => <li>{num}</li>)}
      {users.map(user => <p>user-{user.name} / age-{user.age}</p>)}
      <p style={{color:"red"}}>inline style san kyi tar</p>
      <h1 className="heading">className san kyi tar par</h1>
      <label htmlFor=""></label> */}

      {products.map(product => (
        <div className="card">
          <img src={product.img} width="200px" alt="" />
          <h3 className="title">{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}

      <Home />
    </div>
  )
}

export default App
