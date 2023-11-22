import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import Wrapper from '../../assets/css/SingleClosetItem'
Wrapper
const SingleClosetItem = ({ item }) => {
  return (
    <Wrapper>
      <div className='closet-card category'>
        <div className='product-img'>{item.img}</div>
        <div className='product-desc'>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p className='size'>
            {item.size} | <span className='text-green'> @MaryCloset</span>
          </p>
        </div>
        <div className='socials'>
          <div>
            <CiHeart /> <span>23</span>
          </div>
          <div>
            <AiOutlineLike />
            <span>21</span>
          </div>
          <div>
            <CiShare2 />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleClosetItem
