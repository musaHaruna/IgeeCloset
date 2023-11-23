import { useState } from 'react'
import Wrapper from '../../../assets/css/UserCloset'
import { ClosetBanner, ClosetImg } from '../../../assets/images'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { BiCamera } from 'react-icons/bi'
import { myClosetTabs } from '../../../utils/data'

const UserCloset = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }
  return (
    <Wrapper>
      <article className='banner'>
        <div>
          <img src={ClosetBanner} alt='' />
        </div>
        <div className='camera'>
          <BiCamera />
        </div>

        <section className='banner-content'>
          <section className='banner-content-flex'>
            <div className='closet-profile-img'>
              <img src={ClosetImg} alt='' />
            </div>

            <div className='banner-text'>
              <h1 className='heading'>Mary's Closet</h1>
              <p className='text-green'>@Mary</p>

              <p className='location'>
                <CiLocationOn className='icon' />
                Lagos Nigeria
              </p>
            </div>
          </section>
          <section className='closet-info-container'>
            <div className='closet-info'>
              <h4>32</h4>
              <p>Following</p>
            </div>
            <div className='closet-info'>
              <h4>32</h4>
              <p>Following</p>
            </div>
            <div className='closet-info'>
              <h4>32</h4>
              <p>Following</p>
            </div>
            <button className='follow'>Follow</button>
            <div className='search'>
              <CiSearch className='icon' />
              <input type='text' placeholder='Search closets' />
            </div>
          </section>
        </section>
      </article>
      <article>
        <section className='closet-tabs'>
          {myClosetTabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${activeTab === index ? 'underline' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </section>
        <article>{myClosetTabs[activeTab].content}</article>
      </article>
    </Wrapper>
  )
}

export default UserCloset
