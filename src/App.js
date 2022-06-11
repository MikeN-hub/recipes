import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cuisine from './pages/Cuisine'
import Searched from './pages/Searched'
import Details from './pages/Details'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='cuisine/:type' element={<Cuisine />}></Route>
          <Route path='searched/:value' element={<Searched />}></Route>
          <Route path='details/:id' element={<Details />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
