import React from 'react'
import { singleClosetItem } from '../../../utils/data'
import AwaitingCard from './Cards/AwaitingCard'
import OrdersCard from './Cards/OrdersCard'

screenY
const Orders = () => {
  return (
    <article>
      <h4 className='sub-head'> You have 5 new orders in your closet</h4>
      <section className='closet-cards'>
        {singleClosetItem.map((item, index) => (
          <OrdersCard key={index} item={item} />
        ))}
      </section>
    </article>
  )
}

export default Orders
