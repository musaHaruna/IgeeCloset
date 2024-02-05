import { useState } from 'react'
import PurchaseImg from '../../../assets/images/Home/closet-img.png'
import OfferModal from '../../modals/OfferModal'

const OffersRecieved = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <article>
      <section className='purchase-card'>
        <div className='purchase-img'>
          <img src={PurchaseImg} alt='' />
        </div>
        <div className='purchase-content'>
          <h3>
            <span>Black Regular Karatose T-Shirt1x</span>
          </h3>
          <p>
            From <span className='user-closet'>@MaryCloset</span>
          </p>
          <p>
            Price <span className='price'>N 4500</span>
          </p>

          <p>
            On : <span>16-05-2023</span>
          </p>
        </div>
        <div>
          <h3>Offer Amount</h3>
          <p className='offer-amount'>
            N 200 <span className='percent-off'>-15%</span>
          </p>
          <button className='response' onClick={openModal}>
            Respond
          </button>
          <OfferModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </section>
    </article>
  )
}

export default OffersRecieved
