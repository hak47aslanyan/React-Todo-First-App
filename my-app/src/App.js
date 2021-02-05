import './App.css';
import React from 'react'
import TodoInput from './Components/TodoInput'
import TodoBoard from './Components/TodoBoard'


function App(){
  return (
    <div className="todo-body">
      <h1 className="todo-title">Todo.</h1>
      <div className="todo-container">
        <TodoInput/>
        <TodoBoard/>
      </div>
    </div>
  )
}

export default App;

