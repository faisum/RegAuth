import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Registration Page' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
