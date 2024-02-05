import React from 'react'
import Wrapper from '../../../assets/css/Purchases'
import { CiFilter } from 'react-icons/ci'
import { useState } from 'react'
import PurchaseImg from '../../../assets/images/Home/closet-img.png'

const Purchases = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const options = [
    'All Orders',
    'Processing',
    'Completed',
    'In-Transit',
    'Cancelled',
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }
  return (
    <Wrapper>
      <div className='dropdown'>
        <button onClick={toggleDropdown}>
          <CiFilter />
        </button>
        {isOpen && (
          <div className='dropdown-options'>
            {options.map((option, index) => (
              <div
                key={index}
                className={`dropdown-option ${
                  selectedOption === option ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}

        <p>All Purchases</p>
      </div>
      <article>
        <section className='purchase-card'>
          <div className='purchase-img'>
            <img src={PurchaseImg} alt='' />
          </div>
          <div className='purchase-content'>
            <h3>
              <span>Desito Sear Wear </span>|<span> Women Coat Iteration</span>
            </h3>
            <p>
              From <span className='user-closet'>@MaryCloset</span>
            </p>
            <p>
              <span>Size</span>:XL
            </p>
            <p className='order-status'>Order in transit</p>
            <p>
              On : <span>16-05-2023</span>
            </p>
          </div>
          <div className='view-btn'>
            <button>View Item</button>
          </div>
        </section>
      </article>
    </Wrapper>
  )
}

export default Purchases
