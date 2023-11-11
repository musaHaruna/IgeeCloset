import React from 'react'
import Wrapper from '../assets/css/Home'
import { Link } from 'react-router-dom'
import { HeroImg1 } from '../assets/images'

const Home = () => {
  return (
    <Wrapper>
      <article>
        <section className='hero-content'>
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
        <section className='carousel'>
          <img src={HeroImg1} alt='img-carousel' />
        </section>
      </article>
    </Wrapper>
  )
}

export default Home
