import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import Wrapper from '../../assets/css/SingleClosetItem'
Wrapper
const RelatedProducts = ({ item }) => {
  return (
    <Wrapper>
      <div className='closet-card'>
        <div>{item.img}</div>
        <div className='product-desc'>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p className='size'>
            {item.size} | <span className='text-green'> @MaryCloset</span>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default RelatedProducts
