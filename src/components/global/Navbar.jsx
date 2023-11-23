import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../../assets/css/Navbar'
import { Logo } from './index'
import { useDispatch, useSelector } from 'react-redux'
import { openSignUpModal, openLoginModal } from '../../features/user/userSlice'
import { Login, SignUp } from '../modals'
import { BsSearch } from 'react-icons/bs'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isSignUpModalOpen, isLoginModalOpen, user } = useSelector(
    (state) => state.user
  )

  const username = user?.user.username.charAt(0).toUpperCase()

  const handleOpenModal = () => {
    dispatch(openSignUpModal())
  }
  const handleOpenMLoginodal = () => {
    dispatch(openLoginModal())
  }

  console.log(isLoginModalOpen)

  return (
    <article className='container navbar'>
      <section className=''>
        <Wrapper>
          <div className='logo'>
            <Logo />
          </div>

          <div className='nav-search'>
            <BsSearch className='icon text-green' />
            <input type='text' placeholder='Find the help you need...' />
          </div>
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
            {user ? (
              <h2 className='username'>{username}</h2>
            ) : (
              <li onClick={handleOpenModal} className='cta-green-outline-flat'>
                Login/Signup
              </li>
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
