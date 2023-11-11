import React from 'react'
import { Footer, Navbar } from '../components/global'
import Home from './Home'
import { Outlet } from 'react-router-dom'

const Landing = () => {
  return (
    <main className='container'>
      <Navbar />
      <Home />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Landing
