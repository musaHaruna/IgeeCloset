import { ClosetHero2, MenCate, WomenCate } from '../assets/images'
import Wrapper from '../assets/css/WomenCategory'
import { singleClosetItem } from '../utils/data'
import { MdArrowForwardIos } from 'react-icons/md'
import { SingleClosetItem } from '../components/website'
import { PopularClosetCard } from '../components/website'
import { closetCard, popularCloset } from '../utils/data'
import { Link } from 'react-router-dom'

const WomenCategory = () => {
  return (
    <Wrapper>
      <article className='container'>
        <section className=''>
          <div className='bg-wrapper'>
            <div>
              <img src={ClosetHero2} alt='' />
            </div>
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
                <button className='btn-white'>Sell</button>
              </div>
            </div>
          </div>
        </section>

        <section className='category-head'>
          <p>
            Explore <MdArrowForwardIos />
          </p>
          <p>
            Categories
            <MdArrowForwardIos />
          </p>
          <p>
            Women <MdArrowForwardIos />
          </p>
        </section>

        <section className='categories'>
          <div>
            <img src={WomenCate} alt='' />
            <h3>Dresses & Jumpsuits</h3>
          </div>
          <div>
            <img src={MenCate} alt='' />
            <h3>Dresses & Jumpsuits</h3>
          </div>
          <div>
            <img src={MenCate} alt='' />
            <h3>Dresses & Jumpsuits</h3>
          </div>
          <div>
            <img src={MenCate} alt='' />
            <h3>Dresses & Jumpsuits</h3>
          </div>
        </section>

        <h4 className='popular'>Popular Closets in this category</h4>

        <section className='closets-container'>
          {popularCloset.map((item, index) => (
            <Link>
              <PopularClosetCard key={index} item={item} />
            </Link>
          ))}
        </section>
        <section className='closet-cards'>
          {singleClosetItem.map((item, index) => (
            <SingleClosetItem key={index} item={item} />
          ))}
        </section>
      </article>
    </Wrapper>
  )
}

export default WomenCategory
