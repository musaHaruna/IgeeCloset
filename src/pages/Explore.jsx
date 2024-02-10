import { ClosetHero2, MenCate, WomenCate } from '../assets/images'
import Wrapper from '../assets/css/Explore'
import { SingleClosetItem } from '../components/website'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useFetchAllItems } from '../utils/websiteApi'

const Explore = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [products, setProducts] = useState([])

  const { isLoading, isError, data } = useFetchAllItems(currentPage)
  console.log(products)

  useEffect(() => {
    // Fetch data using Axios or your preferred method
    setProducts(data)
  }, [data, currentPage])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <Wrapper>
      <article className='container'>
        <section className=''>
          <div className='bg-wrapper'>
            <img classNa me='img' src={ClosetHero2} alt='' />

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
          <Link className='category-card' to={'/closet/women'}>
            <img src={WomenCate} alt='' />
            <h3>Women</h3>
          </Link>
          <Link className='category-card' to={'/closet/men'}>
            <img src={MenCate} alt='' />
            <h3>Men</h3>
          </Link>
        </section>

        <section className='category-head'>
          <h2>Trending</h2>
          <p>2000 Products avaliable</p>
        </section>

        <section className='closet-cards'>
          {products?.data?.data.map((item, index) => (
            // Adjust this part based on your requirements
            <div className='links' key={index}>
              <SingleClosetItem item={item} />
            </div>
          ))}
        </section>
        {/* Render pagination controls */}
        <div className='paginate'>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          {/* Display page numbers as links */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </article>
    </Wrapper>
  )
}

export default Explore
