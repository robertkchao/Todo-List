import React, { PropTypes } from 'react'
import {Home} from './Home.js'



export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['wake up', 'eat breakfast', 'go to work']
    }
  }

  done(item) {
    let elem = document.getElementById(item);
    
    if(elem.matches('.done')) {
      elem.classList.remove('done');
    } else {
      elem.classList.add("done");
    }


  }

  addItem(text) {
    let todos = this.state.todos.slice();
    todos.push(text);
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div>
      <form onSubmit = {(e)=>{e.preventDefault();let newTodo=document.getElementById('newTodo'); this.addItem(newTodo.value);}}>
        <input id="newTodo" placeholder="Add New Task"/>
        <input type="submit"/>
      </form>
        <h1> My Todo List </h1>
        <ul>
        {this.state.todos.map((item, index) => <Home key={index} todo={item} index={index} done={this.done.bind(this)}/>)}
        </ul>
      </div>

    )
  }


}

