import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { AiOutlineLike } from 'react-icons/ai'
import Wrapper from '../../../../assets/css/MyClosetCards'

const OrdersCard = ({ item }) => {
  return (
    <Wrapper>
      <div className='closet-card category'>
        <div className='action-btn'>
          <BsThreeDotsVertical />
        </div>
        <div className='product-img'>{item.img}</div>
        <div className='product-desc'>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p className='size'>
            {item.size} | <span className='text-green'>Delivered</span>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default OrdersCard
