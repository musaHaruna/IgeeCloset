import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import Wrapper from '../../assets/css/SingleClosetItem'
Wrapper
const RelatedProducts = ({ item }) => {
  return (
    <Wrapper>
      <div className='closet-card'>
        <div className='related-img'>
          <img src={item.index_image} alt='' />
        </div>
        <div className='product-desc'>
          <h4>{item.title}</h4>
          <p className='text-green'>NGN {item.price}</p>
          <p className='size'>
            {item.size} | <span className='text-green'> @MaryCloset</span>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default RelatedProducts
