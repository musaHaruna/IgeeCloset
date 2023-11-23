import Wrapper from '../../../assets/css/Profile'

const Profile = () => {
  return (
    <Wrapper>
      <article></article>
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
            <label>Delivery Address</label>
            <textarea name='' id='' cols='30' rows='10'></textarea>
          </div>
          <button>Save</button>
          <button>Delete my account</button>
        </form>
      </article>
    </Wrapper>
  )
}

export default Profile
