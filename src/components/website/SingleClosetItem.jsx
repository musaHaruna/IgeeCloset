import React from 'react'
import { CiHeart, CiShare2 } from 'react-icons/ci'
import { SlLike } from 'react-icons/sl'

const SingleClosetItem = ({ item }) => {
  return (
    <div>
      <div>{item.img}</div>
      <div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>
          {item.size} <span> |@MaryCloset</span>
        </p>
      </div>
      <div>
        <CiHeart />
        <SlLike />
        <CiShare2 />
      </div>
    </div>
  )
}

export default SingleClosetItem
