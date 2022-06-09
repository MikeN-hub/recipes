import React, { useState, useEffect } from 'react';

import Pages from './pages/Pages'

const API_KEY = process.env.REACT_APP_API_KEY

function App() {

  return (
    <div className='App'>
      <Pages />
    </div>
  )
}

export default App
