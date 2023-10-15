import React, { useDebugValue, useEffect, useState } from "react";
import Home from "./pages/Home";
// import "./App.css";
// import Products from "./components/Products";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";



const App = () => {
  // const name = "khine zin thin";
  // const age = 20;
  // const arr = [1,2,3,4];
  // const obj = {skill: "html,css",gander:"female"};

  // USESTATE 
  // const con = true;
  // const [state,setState] = useState("khine zin thin");
  // const [img,setImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t1eg6EeSMZCh7lJT026t7Xx-CVHCoX6Kdg&usqp=CAU");
  // const [count,setCount] = useState(0);

  // const [img,setImg] = useState(true);
  // const [name,setName] = useState(true);

  // const changeHandler = () => {
  //   setName(!name);
  //   setImg(!img);
  // }
  
  // USEEFFECT
  // const [count,setCount] = useState(0);
  // useEffect(() =>{
  //   console.log("hello");
  // },[count]);

  // const [items,setItems] = useState([]);
  // useEffect(() => {
  //   fetchData()
  // },[])
  // const fetchData = async () =>{
  //   const api = await fetch('https://fakestoreapi.com/products');
  //   const data = await api.json();
  //   setItems(data);
  //   console.log(data);
  // }
  return (
    <div className="container">
      {/* <Navbar />
      <Products /> */}
      {/* <Home name={name} age={age} arr={arr} obj={obj}/> */}

      {/* <button className={`btn  ${con  ? "btn-primary" : "btn-dark"}`}>click</button> */}


      {/* USESTATE  */}
      {/* SAR CHANGE */}
      {/* <h1>{state}</h1>
      <button onClick={() => setState("KZT")} className="btn btn-dark">click me</button>
      <br /><br /> */}

      {/* IMAGE CHANGE  */}
      {/* <img src={img} alt="" /><br /><br />
      <button onClick={() => setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeGZ8PHxBo8oHOQScl3t3DIBoKNkfUIC8Ug&usqp=CAU")} className="btn btn-danger">click me</button> */}

      {/* Count */}
      {/* <h1>Count - {count}</h1>
      <button onClick={() => setCount(count+1)} className="btn btn-primary">+</button>
      <button onClick={() => setCount(count-1)} className="btn btn-danger">-</button> */}

      {/* TOGGLE IMAGE */}
      {/* <img src={img? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t1eg6EeSMZCh7lJT026t7Xx-CVHCoX6Kdg&usqp=CAU" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeGZ8PHxBo8oHOQScl3t3DIBoKNkfUIC8Ug&usqp=CAU"} alt="" />
      <button onClick={() => setImg(!img)} className="btn btn-dark">change image</button> */}

      {/* <h1>{name ? "khine zin thin" : "kzt"}</h1>
      <button onClick={() => setName(!name)} className="btn btn-primary">name change</button> */}

      {/* <h1>{name ? "liam pyane" : "liam"}</h1>
      <img src={img? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7t1eg6EeSMZCh7lJT026t7Xx-CVHCoX6Kdg&usqp=CAU" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeGZ8PHxBo8oHOQScl3t3DIBoKNkfUIC8Ug&usqp=CAU"} alt="" />
      <button onClick={changeHandler} className="btn btn-primary">name change</button> */}


      {/* USEEFFECT  */}
      {/* <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>click</button> */}

      {/* USEEFFECT  */}
      {/* {items.map(item => (<h1 key={item.id}>{item.title}</h1>))} */}



      


    </div>
  );
};

export default App;
