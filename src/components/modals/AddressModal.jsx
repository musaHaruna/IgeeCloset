import { IoCloseOutline } from 'react-icons/io5'

const AddressModal = ({ isOpen, closeModal }) => {
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  }

  const modalContentStyle = {
    background: '#fff',
    padding: '20px 40px',
    width: '30%',
    borderRadius: '8px',
    position: 'relative',
  }

  const closeBtnStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
  }

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <p className='heading-top'>
          Delivery Address{' '}
          <span>
            <IoCloseOutline onClick={closeModal} />
          </span>
        </p>
        <form>
          <div>
            <label>Name</label>
            <input type='text' name='name' placeholder='E.g Mark John' />
          </div>
          <div>
            <label>Delivery Address</label>
            <input
              type='text'
              name='account_name'
              placeholder='No. 57 Abuja, area 11 Nigera'
            />
          </div>
          <div>
            <label>Phone Number </label>
            <input type='text' name='account_number' placeholder='0042181822' />
          </div>
          <button className='save-changes' type='submit'>
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddressModal
