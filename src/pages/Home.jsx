import React from 'react'
import Wrapper from '../assets/css/Home'
import { Link } from 'react-router-dom'
import { AdLady, HeroImg1 } from '../assets/images'
import { howItWorks, closetCard } from '../utils/data'
import { ClosetCard, GetStartedCard } from '../components/website'
import { PiArrowUpRight } from 'react-icons/pi'

const Home = () => {
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
            <Link className='cta-green-outline-flat'>Sell</Link>
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
              {closetCard.map((item, index) => (
                <ClosetCard key={index} item={item} />
              ))}
            </section>
          </section>
        </section>
      </article>
    </Wrapper>
  )
}

export default Home
