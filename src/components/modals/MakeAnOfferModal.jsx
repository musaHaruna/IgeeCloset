import { IoCloseOutline } from 'react-icons/io5'

const MakeAnOfferModal = ({ isOpen, closeModal, productImg }) => {
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
    width: '50%',
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
        <p className='heading-top'>Make an offer</p>
        <div className='img-flex'>
          <div className='modal-img'>
            <img src={productImg} alt='' />
          </div>
          <div>
            <h4>Black regular keretonse</h4>
            <p>N 450</p>
            <p>More info</p>
          </div>
        </div>
        <div>
          <p className='select-head'>Select your offer</p>
          <div className='select-offer'>
            <div>
              <h4>N 200</h4>
              <p>5% off</p>
            </div>
            <div>
              <h4>N 200</h4>
              <p>15% off</p>
            </div>
            <div>
              <h4>N 200</h4>
              <p>20% off</p>
            </div>
          </div>
        </div>
        <p className='or'>or</p>
        <div>
          <p className='own-offer'>Create your own offer</p>
          <div className='input-wrapper'>
            <span>N</span>
            <input type='text' placeholder='' />
          </div>

          <p>
            All offer are binding and expire in 24 hours. if the seller accepts,
            payment will be processed
          </p>
          <div className='cta-btns'>
            <button className='outline' onClick={closeModal}>
              Cancel
            </button>
            <button className='solid'>Make offer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeAnOfferModal
