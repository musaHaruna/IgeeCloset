import { useState } from 'react'
import Wrapper from '../assets/css/Home'
import { Link } from 'react-router-dom'
import { AdLady, HeroImg1, Story, JoinUs } from '../assets/images'
import { howItWorks, closetCard, faqData } from '../utils/data'
import { ClosetCard, GetStartedCard } from '../components/website'
import { PiArrowUpRight } from 'react-icons/pi'
import { useFetchAllCloset } from '../utils/websiteApi'

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const { isLoading, isError, data } = useFetchAllCloset()
  const closets = data?.data.closets
  console.log(closets)

  // Function to toggle the active FAQ item
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <Wrapper>
      <article>
        <section className='container hero-content'>
          <h1 className='heading'>
            Don't wear it? <span className='text-green'>Sell it!</span>
          </h1>
          <p className='p-md'>
            Sell what you don't need in your closet today, so you can shop for
            what you really need and love.
          </p>
          <div className='cta-btns'>
            <Link className='cta-green-shadow'>Buy</Link>
            <Link
              className='cta-green-outline-flat'
              to={'/sell-on-igee-closet'}
            >
              Sell
            </Link>
          </div>
        </section>
        <section className='container carousel'>
          <img src={HeroImg1} alt='img-carousel' />
        </section>
        <section className='how-it-works'>
          <h2>
            How <span className='text-green'>IGee</span> Closet Works
          </h2>
        </section>

        <p className='steps container text-green '>
          Six simple Steps to get started
          <div className='line'></div>
        </p>
        <section className='container how-it-works-card'>
          {howItWorks.map((item, index) => (
            <GetStartedCard key={index} item={item} />
          ))}
        </section>

        <section className='container ads'>
          <div className='content'>
            <div className='line-broad'></div>
            <div className='line-thin'></div>
            <div className='text'>
              <h4>No Time to Declutter? No problem</h4>
              <p>
                <a className='text-green' href='#'>
                  Click here
                </a>
                and a member of our
              </p>
              <p>team will be in touch to help out.</p>
            </div>

            <div className='line-broad right'></div>
            <div className='line-thin left'></div>
          </div>
          <div className='image'>
            <img src={AdLady} alt='' />
          </div>
        </section>

        <section className='explore-bg'>
          <section className='container explore '>
            <h2 className='heading'>
              Explore Our Closets{' '}
              <span className='arrow'>
                <PiArrowUpRight />
              </span>
            </h2>
            <p className='text-green'>
              Find unique items that fit your current style
            </p>

            <section className='closet-cards'>
              {closets?.map((item, index) => (
                <Link to={`/closet/${item.id}`}>
                  <ClosetCard key={index} item={item} />
                </Link>
              ))}
            </section>
          </section>
        </section>

        <section className='container'>
          <h2 className='heading'>
            Our <span className='text-green'>Story</span>
          </h2>
          <div className='our-story'>
            <div>
              <img src={Story} alt='' />
            </div>
            <div className='our-story-text-container'>
              <p>
                “ iGee Closet stems from my experience monetizing my closet and
                learning about fast fashion and its harmful effects. I believe
                that we can all be a part of the solution by being more
                intentional about our lifestyle choices, including our fashion
                choices.”
              </p>
              <p className='btn-our-story'>
                <a className='white' href='#'>
                  Join us
                </a>
                on this journey towards a more intentional lifestyle.
              </p>
            </div>
          </div>
        </section>

        <section className='container'>
          <section className='faq-bg'>
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

        <section className='join-bg'>
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

export default Home
