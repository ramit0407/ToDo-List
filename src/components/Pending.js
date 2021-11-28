import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
const Pending = ({ history }) => {
  let curLocation = history.location.pathname
  const [todos, setTodos] = useState([])
  const getLocalTodos = async () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = await JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  useEffect(() => {
    getLocalTodos()
  }, [])
  return (
    <div>
      <header>
        <h1>Pending Todos</h1>
      </header>
      <TodoList todos={todos} setTodos={setTodos} curLocation={curLocation} />
    </div>
  )
}
export default Pending
