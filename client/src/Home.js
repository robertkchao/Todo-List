import React from 'react'

export const Home = (props) => {
  return (
    <div className="todo" id={props.index}  onClick = {()=>{props.done(props.index)}}>
      <li>    
      {props.todo}
      </li>
    </div>
  )
}

