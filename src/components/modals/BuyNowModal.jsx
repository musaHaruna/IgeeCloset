import { IoCloseOutline } from 'react-icons/io5'
import { useState } from 'react'
const BuyNowModal = ({ isOpen, closeModal, productImg }) => {
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

  const [activeTab, setActiveTab] = useState('Tab1')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <p className='close-icon'>
          <IoCloseOutline onClick={closeModal} />
        </p>
        <div className='heading-top summary'>
          <div className='tab-btns'>
            <button
              onClick={() => handleTabClick('Tab1')}
              className={activeTab === 'Tab1' ? 'tab-active' : ''}
            >
              Delivery Address
            </button>
            <button
              onClick={() => handleTabClick('Tab2')}
              className={activeTab === 'Tab2' ? 'tab-active' : ''}
            >
              Payement
            </button>
          </div>
        </div>

        <div>
          {activeTab === 'Tab1' && (
            <>
              <div className='img-wrapper'>
                <div>
                  <div className='buy-img'>
                    <img src={productImg} alt='' />
                  </div>
                  <h3 className='text-align'>Regular Keytoes</h3>
                  <p className='text-align'>N 450</p>
                </div>
              </div>

              <div className='checkout-summary'>
                <div>
                  <p>Subtotal</p>
                  <p>Shipping</p>
                  <p>Total</p>
                </div>
                <div>
                  <p>N 450</p>
                  <p>N 200</p>
                  <p>N 500</p>
                </div>
              </div>
              <div className='contact-address-wrapper'>
                <div className='contact-address'>
                  <p>Contact</p>
                  <p>+234 8104436511</p>
                  <p>change</p>
                </div>
                <p className='line'></p>
                <div className='contact-address'>
                  <p>Delivery Address</p>
                  <p>Area 11 Lious Edet house,</p>
                  <p>change</p>
                </div>
              </div>
              <button className='solid'>Continue to payment</button>
            </>
          )}
          {activeTab === 'Tab2' && (
            <>
              <div className='img-wrapper'>
                <div>
                  <div className='buy-img'>
                    <img src={productImg} alt='' />
                  </div>
                  <h3 className='text-align'>Regular Keytoes</h3>
                  <p className='text-align'>N 450</p>
                </div>
              </div>

              <div className='contact-address-wrapper'>
                <div className='contact-address'>
                  <p>Contact</p>
                  <p>+234 8104436511</p>
                  <p>change</p>
                </div>
                <p className='line'></p>
                <div className='contact-address'>
                  <p>Delivery Address</p>
                  <p>Area 11 Lious Edet house,</p>
                  <p>change</p>
                </div>
              </div>
              <p className='p-large'>Payment</p>
              <p className='p-sm'>
                Please use the account information provided below{' '}
              </p>
              <h3 className='text-align'>Kuda Microfinancebank</h3>
              <h3 className='text-align'>0025259841</h3>
              <h3 className='text-align'>iGee Closet</h3>
              <button className='solid'>Continue to payment</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default BuyNowModal
