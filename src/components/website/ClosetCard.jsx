import React from 'react'

const ClosetCard = ({ item }) => {
  return (
    <div className='closet-card'>
      <div>{item.coverImg}</div>
      <div className='closet-card-info'>
        <div className='profile-img'>{item.profileImg}</div>
        <div className='info'>
          <div>
            <h5 className='text-white'>{item.name}</h5>
            <p className='social  text-green'>{item.social}</p>
            <p  className='items text-white'>{item.itemSize}</p>
          </div>
          <button className='follow-btn text-green'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default ClosetCard
