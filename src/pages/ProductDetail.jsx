import React from 'react'
import Wrapper from '../assets/css/ProductDetails'
import { SlArrowRight } from 'react-icons/sl'
import { CiHeart } from 'react-icons/ci'
import { TbMessage } from 'react-icons/tb'
import { SingleProduct } from '../assets/images'
import { RiFlag2Line } from 'react-icons/ri'
import { singleClosetItem } from '../utils/data'
import RelatedProducts from '../components/website/RelatedProducts'

const ProductDetail = () => {
  return (
    <Wrapper>
      <div className='links'>
        <p>
          Home <SlArrowRight />
        </p>
        <p>
          Category <SlArrowRight />
        </p>
        <p>
          Men <SlArrowRight />
        </p>
      </div>
      <article className='product-container'>
        <section className='product-img'>
          <div>
            <div>
              <img src={SingleProduct} alt='' />
            </div>
            <div>
              <img src={SingleProduct} alt='' />
            </div>
            <div>
              <img src={SingleProduct} alt='' />
            </div>
            <div>
              <img src={SingleProduct} alt='' />
            </div>
          </div>
          <div className='item-showcase'>
            <img className='showcase-img' src={SingleProduct} alt='' />
            <div className='icons'>
              <p className='text-green'>
                <CiHeart /> <span>214</span>
              </p>
              <p className='text-green'>
                <TbMessage /> <span>214</span>
              </p>
              <p className='text-green'>
                <RiFlag2Line />
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <p className='from'>
              From <span className='text-green'>Mary Closet</span>{' '}
              <img className='profile' src={SingleProduct} alt='' />
            </p>
            <img src='' alt='' />
          </div>
          <h3 className='heading-1'>America women Blouse vhf 500 grey</h3>
          <h4 className='price'>₦45,000</h4>
          <p className='category'>
            Category: <span className='text-green'>Women</span>
          </p>
          <p className='size'>
            Size: <span className='text-green'>XL</span>{' '}
            <span className='text-green'>see Size Chart</span>
          </p>
          <div className='like-count'>
            <div className='peoples-likes'>
              <img className='profile' src={SingleProduct} alt='' />
              <img className='profile' src={SingleProduct} alt='' />
              <img className='profile' src={SingleProduct} alt='' />
              <img className='profile' src={SingleProduct} alt='' />
            </div>
            <p>eray24 and 19 others like this Product</p>
          </div>
          <div className='details'>
            <h5>Details</h5>
            <p>
              The vacuum cleaner can be divided into vertical, horizontal and
              portable according to the structure. The working principle of the
              vacuum cleaner is to use the electric motor to drive the blades to
              rotate at high speed,
            </p>
          </div>
          <div className='btns'>
            <button className='outline'>Make an offer</button>
            <button className='solid'>Buy Now</button>
          </div>
          <button className='grey'>
            Add to Favourite <CiHeart />
          </button>
        </section>
      </article>

      <article className='customers-comment'>
        <h3>Customer Comments</h3>
        <section>
          <div className='profile-detail'>
            <img className='profile' src={SingleProduct} alt='' />
            <p>Otuekong</p>
          </div>
          <p className='comment'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            animi officiis rerum ea laboriosam aspernatur at repellat facere
            incidunt temporibus?
          </p>
          <div className='reply'>
            <p>A day ago</p>
            <p className='text-green'>Reply</p>
          </div>
        </section>
      </article>

      <article>
        <h3 className='heading-2'>Other Product from this Closet</h3>
        <section className='related-products'>
          {singleClosetItem.map((item, index) => (
            <RelatedProducts key={index} item={item} />
          ))}
        </section>
      </article>
    </Wrapper>
  )
}

export default ProductDetail
