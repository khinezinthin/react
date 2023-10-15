import React from 'react';
import Hello from "./Hello";



const Home = (props) => {
  return (
    <div>
      <h1>Home-page - {props.name} - {props.age}</h1>
      {props.arr.map(el => <p key={el}>{el}</p>)}
      <p>{props.obj.skill} {props.obj.gander}</p>

    <Hello appName={props.name}/>
    </div>
  )
}

export default Home
