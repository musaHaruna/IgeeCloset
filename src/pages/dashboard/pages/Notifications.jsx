import React from 'react'
import Wrapper from '../../../assets/css/Notifications'
import { CiFilter } from 'react-icons/ci'
import { useState } from 'react'

const Notifications = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <Wrapper>
      <button className='delete-btn'>Delete</button>

      <article>
        <section className='notifications'>
          <div>
            <input
              type='checkbox'
              className='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </div>
          <div className='notification-content'>
            <div>
              <h3>Your Item with Ref #00213 has been published successfully</h3>
              <p>
                24 Nov 2022 at <span>9:20 AM</span>
              </p>
            </div>
            <div className='btn-flex'>
              <button className='view-btn'>View Item</button>
            </div>
          </div>
        </section>
      </article>
    </Wrapper>
  )
}

export default Notifications
