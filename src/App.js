import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Cuisine from './pages/Cuisine'
import Searched from './pages/Searched'
import Details from './pages/Details'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  let location = useLocation()

  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='cuisine/:type' element={<Cuisine />}></Route>
            <Route path='searched/:value' element={<Searched />}></Route>
            <Route path='details/:id' element={<Details />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
