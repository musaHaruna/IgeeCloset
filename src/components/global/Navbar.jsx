import React from 'react'
import Wrapper from '../../assets/css/Navbar'
import { Logo } from './index'
import { useDispatch, useSelector } from 'react-redux'
import {
  openSignUpModal,
  openLoginModal,
  logoutUser,
} from '../../features/user/userSlice'
import { HashLink } from 'react-router-hash-link'
import { Login, SignUp } from '../modals'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('')

  const handleSetActive = (section) => {
    setActiveSection(section)
  }
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
    dispatch(openLoginModal())
    document.body.style.overflow = 'hidden'
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
              <HashLink
                to='/explore'
                className={
                  activeSection === 'explore' ? 'active-link' : 'inactive'
                }
                onClick={() => handleSetActive('explore')}
              >
                Explore
              </HashLink>
            </li>

            <li>
              <HashLink
                to='/closet'
                className={
                  activeSection === 'closet' ? 'active-link' : 'inactive'
                }
                onClick={() => handleSetActive('closet')}
              >
                Closet
              </HashLink>
            </li>
            <li>
              <HashLink
                to='/#faq'
                smooth
                className={activeSection === 'faq' ? 'active-link' : 'inactive'}
                onClick={() => handleSetActive('faq')}
              >
                FAQ
              </HashLink>
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
