import React from 'react'
import { singleClosetItem } from '../../../utils/data'
import ListedCard from './Cards/ListedCard'
const Listed = () => {
  return (
    <article>
      <h4 className='sub-head'>You have listed 200 items in this closet</h4>
      <section className='closet-cards'>
        {singleClosetItem.map((item, index) => (
          <ListedCard key={index} item={item} />
        ))}
      </section>
    </article>
  )
}

export default Listed
