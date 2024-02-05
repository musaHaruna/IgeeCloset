import Wrapper from '../../../assets/css/DeliveryAddress'
import { CiEdit } from 'react-icons/ci'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useState } from 'react'
import AddressModal from '../../../components/modals/AddressModal'

const DeliveryAddress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <Wrapper>
      <div className='header'>
        <p>
          <span>2</span> Address
        </p>
        <button className='close'>Close</button>
      </div>
      <article className='card-grid'>
        <section className='card'>
          <div>
            <h3>Mark John</h3>
            <p>Nigerian Police Headquarters, Area 11 Garki</p>
            <p>Abuja- Asokoro, Federal Capital Teritory</p>
            <p>+234810234324</p>
          </div>
          <div className='footer'>
            <p>Defualt Address</p>
            <div className='btns'>
              <CiEdit />
              <RiDeleteBinLine />
            </div>
          </div>
        </section>
        <section className='card'>
          <div>
            <h3>Mark John</h3>
            <p>Nigerian Police Headquarters, Area 11 Garki</p>
            <p>Abuja- Asokoro, Federal Capital Teritory</p>
            <p>+234810234324</p>
          </div>
          <div className='footer'>
            <p>Defualt Address</p>
            <div className='btns'>
              <CiEdit onClick={openModal} />
              <RiDeleteBinLine />
            </div>
          </div>
        </section>
      </article>
      <AddressModal isOpen={isModalOpen} closeModal={closeModal} />
    </Wrapper>
  )
}

export default DeliveryAddress
