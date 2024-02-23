import React from 'react'
import Wrapper from '../assets/css/ProductDetails'
import { SlArrowRight } from 'react-icons/sl'
import { CiHeart } from 'react-icons/ci'
import { TbMessage } from 'react-icons/tb'
import { SingleProduct } from '../assets/images'
import { RiFlag2Line } from 'react-icons/ri'
import { singleClosetItem } from '../utils/data'
import RelatedProducts from '../components/website/RelatedProducts'
import {
  useFetcSingleItem,
  useFetchAllItemsByClosetId,
  useComment,
  useReplyComment,
} from '../utils/websiteApi'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { LuSendHorizonal } from 'react-icons/lu'
import { toast } from 'react-toastify'

const ProductDetail = () => {
  const { id } = useParams()
  const { isLoading, isError, data } = useFetcSingleItem(id)

  const { userComment, status } = useComment()
  const { userReplyComment } = useReplyComment()

  const [comment, setComment] = useState('')

  // Function to handle input changes
  const handleInputChange = (event) => {
    setComment(event.target.value)
  }

  const [activeReplyId, setActiveReplyId] = useState(null)

  const handleReplyClick = (commentId) => {
    setActiveReplyId(commentId)
  }
  const item = data?.data.item
  const productImages = item?.images?.split(',').slice(0, -1)

  const { closetItemLoading, closetItem, closetItemError } =
    useFetchAllItemsByClosetId(data?.data?.item?.closet_id.toString())

  function formatTimeAgo(dateString) {
    const currentDate = new Date()
    const commentDate = new Date(dateString)

    const timeDifference = currentDate - commentDate
    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)

    if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`
    } else if (weeks > 0) {
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`
    } else {
      return 'Just now'
    }
  }

  const [replyInput, setReplyInput] = useState('')

  const handleInputChangeReply = (event) => {
    setReplyInput(event.target.value)
  }

  const handleSumbitComment = (e) => {
    e.preventDefault()

    userComment({
      item_id: item.id,
      msg: comment,
      date: new Date(),
    })

    setComment('')

    toast.success('comment successful')
  }

  const handleReplySubmit = (e, id) => {
    e.preventDefault()
    // Add logic to handle the submission of the reply
    userReplyComment({
      comment_id: id,
      msg: replyInput,
      date: new Date(),
    })
    console.log(id)

    // Reset the state after submission
    setActiveReplyId(null)
    setReplyInput('')
  }
  return (
    <Wrapper>
      <div className='links'>
        <p>
          Home <SlArrowRight />
        </p>
        <p>
          Category <SlArrowRight />
        </p>
        <p>
          Men <SlArrowRight />
        </p>
      </div>
      <article className='product-container'>
        <section className='product-img'>
          <div>
            {productImages?.map((image, index) => (
              <div key={index}>
                <img className='vertical-img' src={image} alt='' />
              </div>
            ))}
          </div>
          <div className='item-showcase'>
            <div className='showcase-img'>
              <img src={item?.index_image} alt='' />
            </div>

            <div className='icons'>
              <p className='text-green'>
                <CiHeart /> <span>item</span>
              </p>
              <p className='text-green'>
                <TbMessage /> <span>{item?.comments_count}</span>
              </p>
              <p className='text-green'>
                <RiFlag2Line />
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <p className='from'>
              From <span className='text-green'>{item?.closet.name}</span>{' '}
              <img className='profile' src={SingleProduct} alt='' />
            </p>
            <img src='' alt='' />
          </div>
          <h3 className='heading-1'>{item?.title}</h3>
          <h4 className='price'>₦ {item?.price}</h4>
          <p className='category'>
            Category: <span className='text-green'>{item?.category.name}</span>
          </p>
          <p className='size'>
            Size: <span className='text-green'>{item?.size}</span>{' '}
            {/* <span className='text-green'>see Size Chart</span> */}
          </p>
          <div className='like-count'>
            <div className='peoples-likes'>
              <img className='profile' src={SingleProduct} alt='' />
              <img className='profile' src={SingleProduct} alt='' />
              <img className='profile' src={SingleProduct} alt='' />
              <img className='profile' src={SingleProduct} alt='' />
            </div>
            <p>eray24 and 19 others like this Product</p>
          </div>
          <div className='details'>
            <h5>Details</h5>
            <p>{item?.description}</p>
          </div>
          <div className='btns'>
            <button className='outline'>Make an offer</button>
            <button className='solid'>Buy Now</button>
          </div>
          <button className='grey'>
            Add to Favourite <CiHeart />
          </button>
        </section>
      </article>

      <article className='customers-comment'>
        <h3>Customer Comments</h3>
        <section>
          <div className='profile-detail'>
            <img className='profile' src={SingleProduct} alt='' />
            <p>Otuekong</p>
          </div>
          <div>
            {item?.comments?.map((item) => (
              <div key={item.id} className='comment'>
                <p>{item?.msg}</p>
                <div className='reply'>
                  <p>{formatTimeAgo(item?.date)}</p>
                  <p
                    className='text-green reply-comment'
                    onClick={() => handleReplyClick(item.id)}
                  >
                    Reply
                  </p>
                </div>

                {item?.replies.length > 0 && (
                  <div className='replies'>
                    {item?.replies.map((reply) => (
                      <div key={reply.id} className='reply'>
                        <p>{reply.msg}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeReplyId === item.id && (
                  <div className='reply-messages'>
                    {/* Input box for the active reply */}
                    <input
                      type='text'
                      placeholder='Type your reply...'
                      value={replyInput}
                      onChange={handleInputChangeReply}
                    />
                    {/* Add a button to submit the reply */}
                    <button onClick={(e, id) => handleReplySubmit(e, item.id)}>
                      Submit Reply
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='comment-box'>
            <input
              type='text'
              value={comment}
              onChange={handleInputChange}
              placeholder='Type your comment...'
            />
            <LuSendHorizonal
              className='green-btn'
              onClick={(e) => handleSumbitComment(e)}
            />
          </div>
        </section>
      </article>

      <article>
        <h3 className='heading-2'>Other Product from this Closet</h3>
        <section className='related-products'>
          {closetItem?.data?.items?.map((item, index) => (
            <RelatedProducts key={index} item={item} />
          ))}
        </section>
      </article>
    </Wrapper>
  )
}

export default ProductDetail
