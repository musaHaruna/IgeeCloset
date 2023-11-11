import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import Wrapper from '../../assets/css/Navbar'

const Navbar = () => {
  return (
    <Wrapper>
      <Link to={'/'}>
        <h3 className='logo'>
          <span className='text-green'>i</span>Gee
          <span className='text-green'> Closet</span>
        </h3>
      </Link>
      <ul>
        <li>
          <NavLink
            to='explore'
            style={({ isActive }) => ({
              color: isActive ? '#3d8d30' : '#17191c',
            })}
          >
            Explore
          </NavLink>
        </li>

        <li>
          <NavLink
            to='closet'
            style={({ isActive }) => ({
              color: isActive ? '#3d8d30' : '#17191c',
            })}
          >
            Closet
          </NavLink>
        </li>
        <li>
          <NavLink
            to='faq'
            style={({ isActive }) => ({
              color: isActive ? '#3d8d30' : '#17191c',
            })}
          >
            FAQ
          </NavLink>
        </li>
        <li className='cta-green-outline-flat'>Login/Signup</li>
      </ul>
    </Wrapper>
  )
}

export default Navbar
