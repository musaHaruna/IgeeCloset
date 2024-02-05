import { ClosetHero2, MenCate, WomenCate } from '../assets/images'
import Wrapper from '../assets/css/Explore'
import { singleClosetItem } from '../utils/data'
import { SingleClosetItem } from '../components/website'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <Wrapper>
      <article className='container'>
        <section className=''>
          <div className='bg-wrapper'>
            <img className='img' src={ClosetHero2} alt='' />

            <div className='content-container'>
              <div className='content'>
                <h2 className=''>
                  Find <span className='text-green'>pre-loved </span> items that
                  fit your <br />{' '}
                  <span className='text-green'>current style</span>
                </h2>
              </div>

              <div className='cta-btns'>
                <button className='btn-green'>Buy</button>
                <Link className='btn-white' to={'/sell-on-igee-closet'}>
                  Sell
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='category-head'>
          <h2>Categories</h2>
          <p>
            The vacuum cleaner can be divided into vertical, horizontal <br />
            and portable
          </p>
        </section>

        <section className='categories'>
          <div>
            <img src={WomenCate} alt='' />
            <h3>Women</h3>
          </div>
          <div>
            <img src={MenCate} alt='' />
            <h3>Men</h3>
          </div>
        </section>

        <section className='category-head'>
          <h2>Trending</h2>
          <p>2000 Products avaliable</p>
        </section>
        <section className='closet-cards'>
          {singleClosetItem.map((item, index) => (
            <Link className='links' to={'/closet/product'}>
              <SingleClosetItem key={index} item={item} />
            </Link>
          ))}
        </section>
      </article>
    </Wrapper>
  )
}

export default Explore
