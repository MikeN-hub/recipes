import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Home from './pages/Home'

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = process.env.REACT_APP_API_URL

function App() {
  const getRecipes = async () => {
    // const str = API_URL + `/random?apiKey=${API_KEY}`
    // console.log(str)
    const res = await axios.get(API_URL + `/random?apiKey=${API_KEY}&number=9`)
    console.log(res)
  }
  getRecipes()
  return (
    <div className='App'>
      <Home />
    </div>
  )
}

export default App
