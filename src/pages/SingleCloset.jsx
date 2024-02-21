import { useState } from 'react'
import Wrapper from '../assets/css/Closet'
import { ClosetBanner, ClosetImg } from '../assets/images'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { singleClosetItem } from '../utils/data'
import { SingleClosetItem } from '../components/website'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  useFetchAllItemsByClosetId,
  useFollowCloset,
  useUnFollowCloset,
} from '../utils/websiteApi'

const SingleCloset = () => {
  const { id } = useParams()
  const closetId = id
  const { isLoading, isError, data } = useFetchAllItemsByClosetId(closetId)
  const closetItems = data?.data.items

  const { followCloset, status } = useFollowCloset()
  const { unfollowCloset } = useUnFollowCloset()
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollowAndUnfollow = () => {
    if (isFollowing) {
      unfollowCloset({ id: 1 })
    } else {
      followCloset({ id: 1 })
    }
    setIsFollowing(!isFollowing) // Toggle the follow state
  }
  const [selectedValue, setSelectedValue] = useState('')

  const options = [
    { value: '', label: 'Availability' },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value)
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
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id='selectBox'
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            id='selectBox'
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </section>
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
