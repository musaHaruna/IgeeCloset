import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Wrapper from '../../assets/css/Navbar'
import { Logo } from './index'
import { useDispatch, useSelector } from 'react-redux'
import {
  openSignUpModal,
  openLoginModal,
  logoutUser,
} from '../../features/user/userSlice'
import { Login, SignUp } from '../modals'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isSignUpModalOpen, isLoginModalOpen, user } = useSelector(
    (state) => state.user
  )
  

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = () => {
    setIsOpen(false)
  }

  const username = user?.user.name.charAt(0).toUpperCase()

  const handleOpenModal = () => {
    dispatch(openSignUpModal())
    document.body.style.overflow = 'hidden'
  }
  const handleOpenMLoginodal = () => {
    dispatch(openLoginModal())
  }

  const handleLogout = () => {
    setIsOpen(false)
    dispatch(logoutUser())
  }
  console.log(isLoginModalOpen)

  return (
    <article className='container navbar'>
      <section className=''>
        <Wrapper>
          <div className='logo'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>

          <div className='nav-search'>
            <BsSearch className='icon text-green' />
            <input type='text' placeholder='Find the help you need...' />
          </div>
          <ul>
            <li>
              <NavLink
                to='/explore'
                style={({ isActive }) => ({
                  color: isActive ? '#3d8d30' : '#17191c',
                })}
              >
                Explore
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/closet'
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
            {user ? (
              <h2 onClick={toggleDropdown} className='username'>
                {username}
              </h2>
            ) : (
              <li onClick={handleOpenModal} className='cta-green-outline-flat'>
                Login/Signup
              </li>
            )}

            {isOpen && (
              <div className='options'>
                <p onClick={handleOptionClick}>
                  <Link to='/user'>Profile</Link>
                </p>
                <p onClick={handleOptionClick}>
                  <Link to='/user/notifications'>Notifications </Link>
                </p>
                <p onClick={handleLogout}>
                  <Link to={'/'}> Logout</Link>
                </p>
              </div>
            )}
          </ul>
          {isSignUpModalOpen && <SignUp />}
          {isLoginModalOpen && <Login />}
        </Wrapper>
      </section>
    </article>
  )
}

export default Navbar
