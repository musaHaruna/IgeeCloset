import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import Wrapper from '../../assets/css/SingleClosetItem'
import { ClosetImg } from '../../assets/images'
Wrapper
const SingleClosetItem = ({ item }) => {
  return (
    <Wrapper>
      <div className='closet-card category'>
        <div className='product-img'>
          <img src={item.tag_images ? item.tag_image : ClosetImg} alt='' />
        </div>
        <div className='product-desc'>
          <h3>{item.title}</h3>
          <p>NGN {item.price}</p>
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
