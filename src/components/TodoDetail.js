import React, { useEffect, useState } from 'react'

const TodoDetail = ({ match }) => {
  let id = match.params.id
  const [status, setStatus] = useState('')
  const [details, setDetail] = useState('')
  const [todo, setTodo] = useState('')

  async function getTodo() {
    let todoLocal = await JSON.parse(localStorage.getItem('todos'))
    console.log(todoLocal, id)
    if (todoLocal == undefined || todoLocal == null) {
      return
    }
    for (let i = 0; i < todoLocal.length; i++) {
      if (id == todoLocal[i].id) {
        console.log('pass')
        setTodo(todoLocal[i].text)
        setDetail(todoLocal[i].details)
        setStatus(todoLocal[i].completed)
        break
      }
    }
  }

  useEffect(() => {
    getTodo()
  }, [status])
  // console.log(status, todo)
  //   console.log(todoLocal)
  //   setTodo(todoLocal)
  //   console.log(id)
  return (
    <div>
      <header>
        <div>
          <h1>Todo Detail</h1>
        </div>
        <div className='statusDetail'>
          <br />
          <br />
          <br />
          <br />
          {status == false ? <h3>Pending ToDo</h3> : <h3>Completed ToDo</h3>}
        </div>
      </header>
      <div className='textDetail'>
        Todo:{todo}
        <br />
        Details:{details}
      </div>
    </div>
  )
}
export default TodoDetail
