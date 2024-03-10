import Wrapper from '../assets/css/Home'
import { faqData } from '../utils/data'
import { FiArrowDownRight } from 'react-icons/fi'
import { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <Wrapper>
      <section id='faq' className='faq-bg'>
        <section className='container'>
          <h2 className='heading'>
            F<span className='text-green'>A</span>Q
          </h2>
          {faqData.map((item, index) => (
            <div
              key={index}
              className='faq-item'
              onClick={() => toggleItem(index)}
            >
              <h3 className='faq-heading'>
                {item.question}

                <FiArrowDownRight className='faq-icon' />
              </h3>
              {activeIndex === index && <p className='faq-p'>{item.answer}</p>}
            </div>
          ))}
        </section>
      </section>
    </Wrapper>
  )
}

export default FAQ
