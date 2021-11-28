import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='App'>
      <header>
        <h1>Todos</h1>
      </header>
      <Link to='/addnew'>
        <button id='addnew' className='btn-home'>
          Add New TODO
        </button>
      </Link>
      <br />
      <Link to='/completed'>
        <button id='completed' className='btn-home'>
          Completed
        </button>
      </Link>
      <br />
      <Link to='pending'>
        <button id='pending' className='btn-home'>
          Pending
        </button>
      </Link>
    </div>
  )
}

export default Home
