import { useState } from 'react'
import links from '../../utils/dashboardLinks'
import { Link } from 'react-router-dom'
import { profile } from '../../assets/images/index'
import { useDispatch, useSelector } from 'react-redux'
const DashboardLinks = () => {
  const [activeTab, setActiveTab] = useState(0)
  const { user } = useSelector((state) => state.user)
  console.log(user)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  return (
    <section className='sidebar'>
      <div className='sidebar-links'>
        <div className='profile-container'>
          <div className='profile-img'>
            <img src={user?.user.image} alt='profile-img' />
          </div>
          <div>
            <h2 className='username'>{user?.user.name.split(' ')[0]}</h2>
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
        <div className='nav-link margin'>
          <Link
            onClick={() => handleTabClick(7)}
            className={`${activeTab === 7 ? 'active' : 'inactive'}`}
            to={'delivery-address'}
          >
            Delivery Address
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DashboardLinks
