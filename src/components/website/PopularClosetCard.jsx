import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PopularClosetCard = ({ item }) => {
  return (
    <section className='closet-card'>
      <div>{item.coverImg}</div>
      <div className='closet-card-info'>
        <div>
          <h5 className='text-white'>{item.name}</h5>
          <p className='social text-green'>{item.social}</p>
          <p className='items text-white'>{item.itemSize}</p>
        </div>
        <div className='arrow'>
          <FaArrowRight />
        </div>
      </div>
    </section>
  )
}

export default PopularClosetCard
