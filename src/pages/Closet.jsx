import { ClosetHero } from '../assets/images'
import { Link } from 'react-router-dom'
import { PopularClosetCard } from '../components/website'
import Wrapper from '../assets/css/Closets'
import { closetCard, popularCloset } from '../utils/data'

const Closet = () => {
  return (
    <Wrapper>
      <article className='container'>
        <section className=''>
          <div className='bg-wrapper'>
            <div>
              <img src={ClosetHero} alt='' />
            </div>
            <div className='content-container'>
              <div className='content'>
                <h2 className=''>Are you an iGee?</h2>
                <p>
                  Intentional Gees are conscious fashion enthusiasts who
                  prioritise the planet
                </p>
                <p> without compromising on style or breaking the bank.</p>
              </div>

              <button className='btn-green'>Become an iGee</button>
            </div>
          </div>
        </section>

        <p className='popular'>
          Popular <span className='text-green'>iGee</span> Closets
        </p>
        <section className='closets-container'>
          {popularCloset.map((item, index) => (
            <Link>
              <PopularClosetCard key={index} item={item} />
            </Link>
          ))}
        </section>
        <p className='popular'>
          Featured <span className='text-green'>iGee</span> Closets
        </p>
        <section className='closets-container'>
          {popularCloset.map((item, index) => (
            <Link>
              <PopularClosetCard key={index} item={item} />
            </Link>
          ))}
        </section>
        <p className='popular'>
          All <span className='text-green'>iGee</span> Closets
        </p>
        <section className='closets-container'>
          {popularCloset.map((item, index) => (
            <Link>
              <PopularClosetCard key={index} item={item} />
            </Link>
          ))}
        </section>
      </article>
    </Wrapper>
  )
}

export default Closet
