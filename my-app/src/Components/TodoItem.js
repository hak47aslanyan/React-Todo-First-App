import React from 'react'

export default function TodoItem() {
  return (
    <div className="todo-item">
      <div className="todo-value">
        <p>Value</p>
      </div>
      <div className="todo-buttons">
        <div className="done"></div>
        <div className="cancel"></div>
      </div>
    </div>
  )
}


