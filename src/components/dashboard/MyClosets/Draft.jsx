import React from 'react'
import { singleClosetItem } from '../../../utils/data'
import DraftCard from './Cards/DraftCard'
const Draft = () => {
  return (
    <article>
      <h4 className='sub-head'>You have 5 items in this closet draft</h4>
      <section className='closet-cards'>
        {singleClosetItem.map((item, index) => (
          <DraftCard key={index} item={item} />
        ))}
      </section>
    </article>
  )
}

export default Draft
