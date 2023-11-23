import React from 'react'
import { singleClosetItem } from '../../../utils/data'
import NotApprovedCard from './Cards/NotApprovedCard'
const NotApproved = () => {
  return (
    <article>
      <section className='closet-cards'>
        {singleClosetItem.map((item, index) => (
          <NotApprovedCard key={index} item={item} />
        ))}
      </section>
    </article>
  )
}

export default NotApproved
