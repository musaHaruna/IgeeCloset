import { useState } from 'react'
import Wrapper from '../assets/css/Closet'
import { ClosetBanner, ClosetImg } from '../assets/images'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { singleClosetItem } from '../utils/data'
import { SingleClosetItem } from '../components/website'
import { Link, useParams } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

import {
  useFetchAllItemsByClosetId,
  useFollowCloset,
  useUnFollowCloset,
} from '../utils/websiteApi'

const SingleCloset = () => {
  const { id } = useParams()
  const closetId = id

  console.log("CLoset id " + closetId)
  const { closetItemLoading, closetItemError, closetItem } =
    useFetchAllItemsByClosetId(closetId)
  const closetItems = closetItem?.data.items

  const { followCloset, status, followData } = useFollowCloset()
  const { unfollowCloset, unfollowData } = useUnFollowCloset()
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowAndUnfollow = () => {
    console.log(unfollowData)
    unfollowCloset({ id: parseInt(closetId) })

    // Toggle the follow state
  }
  const [selectedAvailability, setSelectedAvailability] = useState('')
  const [selectedPrize, setSelectedPrize] = useState('')
  const [selectedSize, setSelectedSize] = useState('')

  const availabilityOptions = [
    { value: '', label: 'Availability' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  const prizeOptions = [
    { value: '', label: 'Prize' },
    { value: 'prize1', label: 'Prize 1' },
    { value: 'prize2', label: 'Prize 2' },
    { value: 'prize3', label: 'Prize 3' },
  ]

  const sizeOptions = [
    { value: '', label: 'Size' },
    { value: 'size1', label: 'Size 1' },
    { value: 'size2', label: 'Size 2' },
    { value: 'size3', label: 'Size 3' },
  ]

  const handleAvailabilityChange = (event) => {
    setSelectedAvailability(event.target.value)
  }

  const handlePrizeChange = (event) => {
    setSelectedPrize(event.target.value)
  }

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value)
  }
  return (
    <Wrapper>
      <article className='banner'>
        <div>
          <img src={ClosetBanner} alt='' />
        </div>
        <section className='banner-content'>
          <section className='banner-content-flex'>
            <div className='closet-profile-img'>
              <img src={ClosetImg} alt='' />
            </div>

            <div className='banner-text'>
              <h1 className='heading'>
                Mary's Closet
                <button className='text-green'>321k item listed</button>
              </h1>
              <p className='text-green'>@Mary</p>
              <p className='inner-p'>
                The vacuum cleaner can be divided into vertical, horizontal and
                portable according to the structure. The working pr
              </p>
              <p className='location'>
                <CiLocationOn className='icon' />
                Lagos Nigeria
              </p>
            </div>
          </section>
          <section className='closet-info-container'>
            <div className='closet-info'>
              <h4>32</h4>
              <p>Following</p>
            </div>
            <div className='closet-info'>
              <h4>32</h4>
              <p>Following</p>
            </div>
            <div className='closet-info'>
              <h4>32</h4>
              <p>Following</p>
            </div>
            <button className='follow' onClick={handleFollowAndUnfollow}>
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
            <div className='search'>
              <CiSearch className='icon' />
              <input type='text' placeholder='Search closets' />
            </div>
          </section>
        </section>
      </article>
      <section className='filters'>
        <div>
          <select
            id='selectBox'
            value={selectedAvailability}
            onChange={handleAvailabilityChange}
          >
            {availabilityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id='selectBox'
            value={selectedSize}
            onChange={handleSizeChange}
          >
            {sizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id='selectBox'
            value={selectedPrize}
            onChange={handlePrizeChange}
          >
            {prizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </section>
      {closetItemLoading && (
        <div className='loader-spinner'>
          <RotatingLines
            type='Oval'
            style={{ color: '#FFF' }}
            height={100}
            width={100}
          />
        </div>
      )}
      <section className='closet-cards'>
        {closetItems?.map((item, index) => (
          <div className='link'>
            <SingleClosetItem key={index} item={item} />
          </div>
        ))}
      </section>
    </Wrapper>
  )
}

export default SingleCloset
