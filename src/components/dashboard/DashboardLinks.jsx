import React from 'react'
import links from '../../utils/dashboardLinks'
import { NavLink } from 'react-router-dom'
import { profile } from '../../assets/images/index'
const DashboardLinks = () => {
  return (
    <div className='nav-links'>
      <div className='profile-container'> 
        <div className='profile-img'>
          <img src={profile} alt='profile-img' />
        </div>
        <div>
          <h2 className='username'>Musa</h2>
          <p className='status text-green '>active</p>
        </div>
      </div>
      <h2>Account </h2>
      {links.map((link) => {
        const { text, path, id, icon } = link
        return (
          <div className='nav-link' key={id}>
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive ? 'active' : 'inactive'
              }}
              key={id}
            >
              <span className='icon'>{icon}</span>
              {text}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default DashboardLinks
