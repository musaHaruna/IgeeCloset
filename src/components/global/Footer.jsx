import Wrapper from '../../assets/css/Footer'
import { IoIosArrowRoundForward } from 'react-icons/io'
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai'
import { FiPhone, FiFacebook, FiTwitter } from 'react-icons/fi'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <article className='container'>
      <Wrapper>
        <section className='footer-links'>
          <ul>
            <h3>Company Info</h3>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>Affiliate</Link>
            </li>
            <li>
              <Link>Fashion Blogger</Link>
            </li>
          </ul>
          {/* /////////////////////////////////////// */}
          <ul>
            <h3>Help and Support</h3>
            <li>
              <Link>Shipping Info</Link>
            </li>
            <li>
              <Link>Refunds</Link>
            </li>
            <li>
              <Link>How to Order</Link>
            </li>
            <li>
              <Link>How to Track</Link>
            </li>
            <li>
              <Link>Size Guides</Link>
            </li>
          </ul>
          {/* //////////////////////////////////// */}
          <ul>
            <h3>Customer Care</h3>
            <li>
              <Link>Contact Us </Link>
            </li>
            <li>
              <Link>Payement Methods</Link>
            </li>
            <li>
              <Link>Bonus Point</Link>
            </li>
            <li>
              <Link>How to Track</Link>
            </li>
            <li>
              <Link>Size Guides</Link>
            </li>
          </ul>
          {/* ///////////////////////////////////// */}
          <ul>
            <h3>Signup For The Latest News</h3>
            <li className='mail-us'>
              <input type='text' placeholder='Enter Email' />
              <IoIosArrowRoundForward className='footer-icon' />
            </li>
            <li className='mail'>
              <AiOutlineMail className='footer-icon' />
              <Link>something@gmail.com</Link>
            </li>
            <li className='phone'>
              <FiPhone className='footer-icon' />
              <Link>+2321354524</Link>
            </li>
          </ul>
        </section>
        <section className='social-handles'>
          <FiFacebook className='footer-icon' />
          <AiOutlineInstagram className='footer-icon' />
          <AiOutlineYoutube className='footer-icon' />
          <FiTwitter className='footer-icon' />
        </section>
        <section className='all-rights'>
          <p>All rights Reserved</p>
        </section>
      </Wrapper>
    </article>
  )
}

export default Footer
