import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { BsThreeDotsVertical } from 'react-icons/bs'

import { AiOutlineLike } from 'react-icons/ai'
import Wrapper from '../../../../assets/css/MyClosetCards'

const DraftCard = ({ item }) => {
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
        </div>
        <button className='btn review'>Submit for Review</button>
      </div>
    </Wrapper>
  )
}

export default DraftCard
