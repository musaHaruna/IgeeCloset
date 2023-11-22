import { useState } from 'react'
import links from '../../utils/dashboardLinks'
import { Link } from 'react-router-dom'
import { profile } from '../../assets/images/index'
const DashboardLinks = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

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
      {links.map((link, index) => {
        const { text, path, id, icon } = link
        return (
          <div className='nav-link' key={id}>
            <Link
              to={path}
              onClick={() => handleTabClick(index)}
              className={`${activeTab === index ? 'active' : 'inactive'}`}
              key={id}
            >
              <span className='icon'>{icon}</span>
              {text}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default DashboardLinks
