import React from 'react'
import Wrapper from '../assets/css/Home'
import { Link } from 'react-router-dom'
import { AdLady, HeroImg1 } from '../assets/images'
import howItWorks from '../utils/data'
import { GetStartedCard } from '../components/website'

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
                  {' '}
                  Click here
                </a>{' '}
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

        <section>
          <section className='container'></section>
        </section>
      </article>
    </Wrapper>
  )
}

export default Home
