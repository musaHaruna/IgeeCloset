import React from 'react'
import { ClosetImg } from '../../assets/images'

const ClosetCard = ({ item }) => {
  return (
    <div className='closet-card'>
      <img
        className='img'
        src={item.customer?.image ? item.customer?.image : ClosetImg}
        alt=''
      />

      <div className='closet-card-info'>
        <div>
          <img
            className='profile-img'
            src={item.customer?.image ? item.customer?.image : ClosetImg}
            alt=''
          />
        </div>
        <div className='info'>
          <div>
            <h5 className='text-white'>{item.name}</h5>
            <p className='social text-green'>@{item.customer.username}</p>
            <p className='items text-white'>
              {item.items_count <= 0
                ? '0 items listed'
                : item.items_count === 1
                ? '1 item listed'
                : `${item.items_count} items listed`}
            </p>
          </div>
          <button className='follow-btn text-green'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default ClosetCard
