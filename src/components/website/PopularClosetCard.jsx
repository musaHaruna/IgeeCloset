import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { ClosetImg } from '../../assets/images'

const PopularClosetCard = ({ item }) => {
  return (
    <section className='closet-card'>
      <img
        className='image'
        src={item.customer?.image ? item.customer?.image : ClosetImg}
        alt=''
      />

      <div className='closet-card-info'>
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
        <div className='arrow'>
          <FaArrowRight />
        </div>
      </div>
    </section>
  )
}

export default PopularClosetCard
