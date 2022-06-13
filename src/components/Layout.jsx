import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Search from './Search'
import Categories from './Categories'

const Layout = () => {
  return (
    <div>
      <Header />
      <Search />
      <Categories />
      <Outlet />
    </div>
  )
}

export default Layout
