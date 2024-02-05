import { useState } from 'react'
import PurchaseImg from '../../assets/images/Home/closet-img.png'

const OfferModal = ({ isOpen, closeModal, modalContent }) => {
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
    padding: '20px',
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
        <p className='heading'>Offer</p>
        <div className='modal-content'>
          <img src={PurchaseImg} alt='' className='purchase-img modal' />
          <h3>Black Regular Keratose T-Shirt1x</h3>
          <p>Amount Offering</p>
          <p className='offer-amount'>
            N 200 <span className='percent-off'>-15%</span>
          </p>
          <p>
            On : <span>16-05-2023</span>
          </p>
          <button className='response'>Accept</button>
          <button className='response reject' onClick={closeModal}>
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}

export default OfferModal
