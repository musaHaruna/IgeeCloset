import { useState } from 'react'
import { RiGalleryLine } from 'react-icons/ri'
import Wrapper from '../assets/css/SellOnIgeeCloset'
import { IoAlertCircleOutline } from 'react-icons/io5'
import { SlArrowDown, SlArrowRight } from 'react-icons/sl'

const SellOnIgeeCloset = () => {
  const [selectedSizes, setSelectedSizes] = useState(null)
  const [isOptionsOpen, setOptionsOpen] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [isCategoriesOpen, setCategoriesOpen] = useState(false)
  const [isSizesOpen, setSizesOpen] = useState(false)

  const options = [
    {
      category: 'Men',
      sizes: [
        'Shirt',
        'Pants',
        'Jeans',
        'Hoodie',
        'Native wears',
        'Suits',
        'Short',
        'Jumpers & sweaters',
        'Other men clothing',
      ],
    },
    {
      category: 'Women',
      sizes: [
        'Shirt',
        'Pants',
        'Jeans',
        'Hoodie',
        'Native wears',
        'Suits',
        'Short',
        'Jumpers & sweaters',
        'Other women clothing',
      ],
    },
  ]

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    setSelectedSize(null)
    setSizesOpen(true)
  }

  const handleSelectSize = (size) => {
    setSelectedSize(size)
    setSizesOpen(false)
    setCategoriesOpen(false)
  }

  const toggleCategories = () => {
    setCategoriesOpen(!isCategoriesOpen)
    setSizesOpen(false)
  }

  const toggleSizes = () => {
    setSizesOpen(!isSizesOpen)
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  const handleSelectSizes = (size) => {
    setSelectedSizes(size)
    setOptionsOpen(false)
  }

  const toggleOptions = () => {
    setOptionsOpen(!isOptionsOpen)
  }
  return (
    <Wrapper>
      <article className='container'>
        <section className='product-gallery'>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
            </button>
            <input type='file' name='myfile' />
          </div>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
            </button>
            <input type='file' name='myfile' />
          </div>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
            </button>
            <input type='file' name='myfile' />
          </div>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
            </button>
            <input type='file' name='myfile' />
          </div>
        </section>

        <form>
          <div>
            <label>
              Item title <span className='text-red'>*</span>
            </label>
            <span className='item-label'> max of 4 words</span>
            <input type='text' name='name' />
            <p className='text-sm'>
              What are you selling ? include words that your buyers would search
              for
            </p>
          </div>
          <div>
            <label>
              Product Description <span className='text-red'>*</span>
            </label>
            <input type='text' name='account_name' />
            <p className='text-sm text-fade'>
              Every pre-loved item has a story, what's yours?😀 Also, describe
              your item accurately including any signs of wear and tear. Make
              sure to use keywords.
            </p>
          </div>
          <div>
            <label>Category</label>
            <div className='custom-select-box-category'>
              <div className='selected-category'>
                {selectedCategory + ' -> ' + selectedSize || 'Select a category'}
                <span onClick={toggleCategories}>
                  <SlArrowDown />
                </span>
              </div>
              {isCategoriesOpen && (
                <ul className='options-list-category'>
                  {options.map((option) => (
                    <li
                      key={option.category}
                      onClick={() => handleSelectCategory(option.category)}
                    >
                      {option.category}
                      <span>
                        <SlArrowRight />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {isSizesOpen && (
                <ul className='options-list-category-inner'>
                  {options
                    .find((option) => option.category === selectedCategory)
                    ?.sizes.map((size) => (
                      <li key={size} onClick={() => handleSelectSize(size)}>
                        {size}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>

          <section className='brands'>
            <div>
              <label>Brand</label>
              <input type='text' name='account_name' />
            </div>
            <div className='custom-select-box'>
              <label>Size</label>
              <div className='selected-size' onClick={toggleOptions}>
                {selectedSizes || 'Select a size'}
                <span>
                  <SlArrowDown />
                </span>
              </div>
              {isOptionsOpen && (
                <ul className='options-list'>
                  {sizes.map((size) => (
                    <li key={size} onClick={() => handleSelectSizes(size)}>
                      {size}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          <p>Please upload the cloth's tag or an image of you in the cloth.</p>
          <section className='tag-upload'>
            <div class='upload-btn-wrapper-img tag'>
              <button class='btn'>upload</button>
              <input type='file' name='myfile' />
            </div>
            <div>
              <label>Size Description</label>
              <input type='text' name='account_name' />
              <p className='text-sm text-fade'>
                Please include additional sizing details to help the buyer gauge
                the size of the item. This could be the item's dimensions as
                measured with a tape.
              </p>
            </div>
          </section>
          <div>
            <label>
              Price <span className='text-red'>*</span>
            </label>
            <p>₦</p>
            <input type='text' name='account_name' />
            <p className='text-sm'>
              To keep the platform up and running, we charge a fee of 10% on
              each item sold
            </p>
          </div>

          <section className='brands'>
            <div>
              <label>
                Location <span className='text-red'>*</span>{' '}
                <span>
                  <IoAlertCircleOutline />
                </span>
              </label>
              <input type='text' name='account_name' />
              <p className='text-sm'>
                house number, street name, and city. Include any landmarks near
                location
              </p>
            </div>
            <div>
              <label>State</label>
              <input type='text' name='account_name' />
            </div>
          </section>
          <section>
            <h3>Delivery</h3>
            <p className='text-sm'>
              Please select the delivery option you would like to offer the
              buyer
            </p>
            <div className='toggler-btn'>
              <label className='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
              <p>Buyer pays</p>
              <span>
                <IoAlertCircleOutline />
              </span>
            </div>
            <div className='toggler-btn'>
              <label className='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>

              <p>Offer free shipping to buyer</p>
              <span>
                <IoAlertCircleOutline />
              </span>
            </div>
          </section>
          <section className='submit-btn'>
            <div className='review'>
              <button>Submit for review</button>
              <span>
                <IoAlertCircleOutline />
              </span>
            </div>

            <button className='save-as'> Save as Default</button>
          </section>
        </form>
      </article>
    </Wrapper>
  )
}

export default SellOnIgeeCloset
