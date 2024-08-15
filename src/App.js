import React from 'react'
import {Routes, Route, HashRouter} from 'react-router-dom'

import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
