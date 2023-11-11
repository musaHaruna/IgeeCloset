import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Wrapper from '../../assets/css/Navbar'
import { Logo } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { openSignUpModal, openLoginModal } from '../../features/user/userSlice'
import { Login, SignUp } from '../modals'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isSignUpModalOpen, isLoginModalOpen, user } = useSelector(
    (state) => state.user
  )

  console.log(user)

  console.log(isSignUpModalOpen)

  const handleOpenModal = () => {
    dispatch(openSignUpModal())
  }
  const handleOpenMLoginodal = () => {
    dispatch(openLoginModal())
  }

  return (
    <Wrapper>
      <Logo />
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
        <h3>{user.user.username}</h3>
        <li onClick={handleOpenModal} className='cta-green-outline-flat'>
          Login/Signup
        </li>
      </ul>
      {isSignUpModalOpen && <SignUp />}
      {isLoginModalOpen && <Login />}
    </Wrapper>
  )
}

export default Navbar
