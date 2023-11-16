import React from 'react'
import { Footer, Navbar } from '../components/global'

import { Outlet } from 'react-router-dom'

const Landing = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Landing
