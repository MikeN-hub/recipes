import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cuisine from './Cuisine'

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cuisine/:type' element={<Cuisine />}></Route>
      </Routes>
    </div>
  )
}
;
export default Pages
