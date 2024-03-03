import Wrapper from '../assets/css/Home'
import { faqData } from '../utils/data'
import { useState } from 'react'
import { JoinUs } from '../assets/images'
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  // Function to toggle the active FAQ item
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <Wrapper>
      <article>
        <section className=''>
          <section className='faq-bg faq-padding'>
            <h2 className='heading'>
              F<span className='text-green'>A</span>Q
            </h2>
            {faqData.map((item, index) => (
              <div
                key={index}
                className='faq-item'
                onClick={() => toggleItem(index)}
              >
                <h3 className='faq-heading'>{item.question}</h3>
                {activeIndex === index && (
                  <p className='faq-p'>{item.answer}</p>
                )}
              </div>
            ))}
          </section>
        </section>

        <section className='join-bg faq'>
          <section className='container join'>
            <div className='join-us'>
              <div>
                <img src={JoinUs} alt='' />
              </div>
              <div className='join-us-text-container'>
                <div>
                  <h2 className='text-white'>
                    Become an <span className='text-green'> iGee </span> today.{' '}
                    <br />
                    Join the movement to slow down fast fashion.
                  </h2>
                  <div className='cta-btn'>
                    <button className='buy'>Buy</button>
                    <button className='sell'>Sell</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </article>
    </Wrapper>
  )
}

export default FAQ
