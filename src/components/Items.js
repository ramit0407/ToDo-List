import React, { useState, useEffect } from 'react'
import Form from './Form'
import { withRouter } from 'react-router-dom'

function Items({ history }) {
  const [inputText, setInputText] = useState('')
  const [inputDetail, setInputDetail] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    saveLocalTodos()
  }, [todos])

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputDetail={inputDetail}
        setInputDetail={setInputDetail}
      />
    </div>
  )
}

export default withRouter(Items)
