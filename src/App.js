import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'
import Pending from './components/Pending'
import './App.css'
import Completed from './components/Completed'
import TodoDetail from './components/TodoDetail'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact />
      <Route path='/addnew' component={Items} exact />
      <Route path='/pending' component={Pending} exact />
      <Route path='/completed' component={Completed} exact />
      <Route path='/tododetail/:id' component={TodoDetail} exact />
    </BrowserRouter>
  )
}

export default App
