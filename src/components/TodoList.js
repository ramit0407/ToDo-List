import React, { useState, useEffect } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos, curLocation }) => {
  let status = false
  if (curLocation === '/completed') {
    status = true
  }
  const [filteredTodos, setFilteredTodos] = useState([])
  function getFilteredTodos() {
    for (let i = 0; i < todos.length; i++) {
      if (
        todos[i].completed === status &&
        filteredTodos.find((element) => element.id !== todos[i].id) ===
          undefined
      ) {
        let temp = todos[i]
        setFilteredTodos((prevArray) => [...prevArray, temp])
      }
    }
  }

  useEffect(() => {
    getFilteredTodos()
  }, [todos])
  return (
    <>
      <div className='todo-container'>
        <ul className='todo-list'>
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
              todo={todo}
              status={status}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList
