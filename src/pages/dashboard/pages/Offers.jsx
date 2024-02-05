import React from 'react'
import Wrapper from '../../../assets/css/Offer'
import { useState } from 'react'
import OffersMade from '../../../components/dashboard/Offers/OffersMade'
import OffersRecieved from '../../../components/dashboard/Offers/OffersRecieved'

const Offers = () => {
  const [activeTab, setActiveTab] = useState('offers-made')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }
  return (
    <Wrapper>
      <div className='tab-header'>
        <button
          className={`tab-button ${
            activeTab === 'offers-made' ? 'active' : ''
          }`}
          onClick={() => handleTabChange('offers-made')}
        >
          Offers Made <span>(4)</span>
        </button>
        <button
          className={`tab-button ${
            activeTab === 'offers-recieved' ? 'active' : ''
          }`}
          onClick={() => handleTabChange('offers-recieved')}
        >
          Offers Received <span>(4)</span>
        </button>
      </div>
      <div className='tab-content'>
        {activeTab === 'offers-made' && <OffersMade />}
        {activeTab === 'offers-recieved' && <OffersRecieved/>}
      </div>
    </Wrapper>
  )
}

export default Offers
