import React from 'react'
import { withRouter } from 'react-router-dom'

const Form = ({
  inputText,
  setInputText,
  inputDetail,
  setInputDetail,
  todos,
  setTodos,
  history,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  const inputDetailHandler = (e) => {
    setInputDetail(e.target.value)
  }
  const submitTodoHandler = async (e) => {
    e.preventDefault()
    setTodos([
      ...todos,
      {
        text: inputText,
        details: inputDetail,
        completed: false,
        id: Math.random() * 1000,
      },
    ])

    await localStorage.setItem('todos', JSON.stringify(todos))
    setInputText('')
    setInputDetail('')
    history.push('/pending')
  }

  return (
    <>
      <header>
        <h1>Todos</h1>
      </header>
      <form>
        <div className='form-div'>
          <input
            type='text'
            className='todo-input'
            value={inputText}
            onChange={inputTextHandler}
            placeholder='Write Your Work'
          />
          <br />
          <input
            type='text'
            className='todo-detail'
            value={inputDetail}
            onChange={inputDetailHandler}
            placeholder='Write Some details'
          />
          <br />
          <button
            type='submit'
            className='todo-button'
            onClick={submitTodoHandler}
          >
            Add
          </button>
        </div>
        <br />
        {/* <div className='select' onChange={statusHandler}>
          <select className='filter-todo' name='todos'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
          </select>
        </div> */}
      </form>
    </>
  )
}

export default withRouter(Form)
