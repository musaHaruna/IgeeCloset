import Wrapper from '../../../assets/css/Profile'

const BankInfo = () => {
  return (
    <Wrapper>
      <h4>Money made from selling your items will be sent here</h4>
      <form action=''>
        <div>
          <label>Bank Name</label>
          <input type='text' placeholder='Fcmb' />
        </div>
        <div>
          <label>Account Name</label>
          <input type='text' placeholder='Christy James' />
        </div>
        <div>
          <label>Account Number </label>
          <input type='text' placeholder='0042181822' />
        </div>
        <button>Save Changes</button>
      </form>
    </Wrapper>
  )
}

export default BankInfo
