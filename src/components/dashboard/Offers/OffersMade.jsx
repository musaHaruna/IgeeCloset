import React from 'react'
import PurchaseImg from '../../../assets/images/Home/closet-img.png'

const OffersMade = () => {
  return (
    <article>
      <p className='desc-text'>
        {' '}
        You have mad a total of <span>2</span> offer
      </p>
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
          <p className='offer-accepted'>Offer accepted</p>
        </div>
      </section>
    </article>
  )
}

export default OffersMade
