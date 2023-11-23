import Wrapper from '../../../assets/css/Profile'
import { ClosetBanner, MenCate } from '../../../assets/images'
import { AiOutlineCamera } from 'react-icons/ai'

const Profile = () => {
  return (
    <Wrapper>
      <article className='user-banner'>
        <div className='banner'>
          <AiOutlineCamera className='upload-pic' />
          <img src={ClosetBanner} alt='' />
        </div>
        <div className='user-profile-img'>
          <img src={ClosetBanner} alt='' />
          <AiOutlineCamera className='camera' />
        </div>
      </article>
      <h4 className='text-green'>User information</h4>
      <article>
        <form action=''>
          <div>
            <label>Account Name</label>
            <input type='text' placeholder='Otuekong Archibong' />
          </div>
          <div>
            <label>Email Address</label>
            <input type='text' placeholder='Otuekongdomino@gmail.com' />
          </div>
          <div>
            <label>Phone number </label>
            <input type='text' placeholder='2348104436511' />
          </div>
          <div>
            <label>Location</label>
            <input type='text' placeholder='No. 57 Abuja, area 11 Nigeria' />
          </div>
          <div>
            <label>State</label>
            <input type='text' placeholder='FCT' />
          </div>
          <div>
            <label>Delivery Address</label>
            <input type='text' placeholder='No. 57 Abuja, area 11 Nigeria' />
          </div>
          <div>
            <label>Bio</label>
            <textarea name='' id='' cols='20' rows='5'></textarea>
          </div>
          <button className='btn-green'>Save</button>
          <button className='btn-red'>Delete my account</button>
        </form>
      </article>
    </Wrapper>
  )
}

export default Profile
