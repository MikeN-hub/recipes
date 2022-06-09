import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Search  from './Search'

const Layout = () => {
  return (
    <div>
      <Header />
      <Search />
      <Outlet />
    </div>
  )
}

export default Layout