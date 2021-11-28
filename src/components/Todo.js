import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Todo = ({ text, todo, todos, setTodos, status }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
    localStorage.setItem('todos', JSON.stringify(todos))
    window.location.reload()
  }

  const completeHandler = async () => {
    await setTodos(
      await todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
    window.location.reload()
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos, completeHandler, deleteHandler])
  return (
    <>
      <div className='todo'>
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <Link to={`/tododetail/${todo.id}`}>{text}</Link>
        </li>
        {status === false ? (
          <>
            <button className='complete-btn' onClick={completeHandler}>
              <i className='fas fa-check' />
            </button>
          </>
        ) : (
          <></>
        )}
        <button className='trash-btn' onClick={deleteHandler}>
          <i className='fas fa-trash' />
        </button>
      </div>
    </>
  )
}

export default Todo
