import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import './App.css'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Home />} />
          <Route exact path='/login' element={< Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
