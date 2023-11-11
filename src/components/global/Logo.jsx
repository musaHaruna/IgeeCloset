import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div>
      <Link to={'/'}>
        <h3 className='logo'>
          <span className='text-green'>i</span>Gee
          <span className='text-green'> Closet</span>
        </h3>
      </Link>
    </div>
  )
}

export default Logo
