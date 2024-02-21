import { useState } from 'react'
import { RiGalleryLine } from 'react-icons/ri'
import Wrapper from '../assets/css/SellOnIgeeCloset'
import { IoAlertCircleOutline } from 'react-icons/io5'
import { SlArrowDown, SlArrowRight } from 'react-icons/sl'
import {
  useSubmitForReview,
  useUploadItem1,
  useUploadItem2,
  useUploadItem3,
  useUploadItem4,
  useUploadItem5,
} from '../utils/websiteApi'
import { useEffect } from 'react'

const SellOnIgeeCloset = () => {
  const [selectedSizes, setSelectedSizes] = useState(null)
  const [isOptionsOpen, setOptionsOpen] = useState(false)
  const [itemTitle, setItemTitle] = useState('')

  const handleTitleChange = (e) => {
    setItemTitle(e.target.value)
  }
  const [productDescription, setProductDescription] = useState('')

  const handleDescriptionChange = (e) => {
    setProductDescription(e.target.value)
  }

  const [brand, setBrand] = useState('')

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }
  const [sizeDescription, setSizeDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [customersState, setCustomersState] = useState('')

  const handleSizeDescriptionChange = (e) => {
    setSizeDescription(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleCustomersStateChange = (e) => {
    setCustomersState(e.target.value)
  }

  const [freeShipping, setFreeShipping] = useState(null)
  const [paidShipping, setPaidShipping] = useState(null)

  // Event handlers to update the states when the inputs change
  const handleFreeShippingToggle = () => {
    setFreeShipping((prevValue) => (prevValue === null ? true : !prevValue))
  }

  const handlePaidShippingToggle = () => {
    setPaidShipping((prevValue) => (prevValue === null ? true : !prevValue))
  }

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [isCategoriesOpen, setCategoriesOpen] = useState(false)
  const [isSizesOpen, setSizesOpen] = useState(false)

  const options = [
    {
      category: 'Men',
      category_id: 1,
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
      category_id: 2,
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

  const [categoryID, setCategoryID] = useState(null)
  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    if (category === 'Men') {
      setCategoryID('1')
    }
    if (category === 'Women') {
      setCategoryID('2')
    }
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
  const [productSize, setProductSize] = useState()

  const handleSelectSizes = (size) => {
    setSelectedSizes(size)

    setOptionsOpen(false)
  }

  const toggleOptions = () => {
    setOptionsOpen(!isOptionsOpen)
  }

  const [uploadFile1, setUploadFile1] = useState(null)
  const [uploadFile2, setUploadFile2] = useState(null)
  const [uploadFile3, setUploadFile3] = useState(null)
  const [uploadFile4, setUploadFile4] = useState(null)
  const [uploadFile5, setUploadFile5] = useState(null)

  const { uploadItem1, item1 } = useUploadItem1()
  const { uploadItem2, item2 } = useUploadItem2()
  const { uploadItem3, item3 } = useUploadItem3()
  const { uploadItem4, item4 } = useUploadItem4()
  const { uploadItem5, item5 } = useUploadItem5()

  let [productImages, setProductImages] = useState('')

  useEffect(() => {
    if (uploadFile1) {
      const formData = new FormData()
      // Append additional properties
      formData.append('type', 'image')
      formData.append('description', 'Profile picture')
      // Append the file
      formData.append('file', uploadFile1)
      console.log('FormData:', formData)
      uploadItem1({ formData })
    }
  }, [uploadFile1])

  useEffect(() => {
    if (uploadFile2) {
      const formData = new FormData()
      // Append additional properties
      formData.append('type', 'image')
      formData.append('description', 'Profile picture')
      // Append the file
      formData.append('file', uploadFile2)
      console.log('FormData:', formData)
      uploadItem2({ formData })
    }
  }, [uploadFile2])
  useEffect(() => {
    // For useUploadItem3
    if (uploadFile3) {
      const formData = new FormData()
      // Append additional properties
      formData.append('type', 'image')
      formData.append('description', 'Profile picture')
      // Append the file
      formData.append('file', uploadFile3)
      console.log('FormData:', formData)
      uploadItem3({ formData })
    }
  }, [uploadFile3])
  useEffect(() => {
    // For useUploadItem4
    if (uploadFile4) {
      const formData = new FormData()
      // Append additional properties
      formData.append('type', 'image')
      formData.append('description', 'Profile picture')
      // Append the file
      formData.append('file', uploadFile4)
      console.log('FormData:', formData)
      uploadItem4({ formData })
    }
  }, [uploadFile4])
  useEffect(() => {
    // For useUploadItem4
    if (uploadFile5) {
      const formData = new FormData()
      // Append additional properties
      formData.append('type', 'image')
      formData.append('description', 'Profile picture')
      // Append the file
      formData.append('file', uploadFile5)
      console.log('FormData:', formData)
      uploadItem5({ formData })
    }
  }, [uploadFile5])

  const handleFileChange1 = (e) => {
    setUploadFile1(e.target.files[0])
  }
  const handleFileChange2 = (e) => {
    setUploadFile2(e.target.files[0])
  }
  const handleFileChange3 = (e) => {
    setUploadFile3(e.target.files[0])
  }
  const handleFileChange4 = (e) => {
    setUploadFile4(e.target.files[0])
  }
  const handleFileChange5 = (e) => {
    setUploadFile5(e.target.files[0])
  }
  productImages += item1?.data.url + ', '
  productImages += item2?.data.url + ', '
  productImages += item3?.data.url + ', '
  productImages += item4?.data.url + ','

  const { submitForReview } = useSubmitForReview()

  const handleSumbitForReview = (e) => {
    e.preventDefault()

    submitForReview({
      images: productImages,
      index_image: item1?.data.url,
      title: itemTitle,
      description: productDescription,
      category_id: categoryID,
      brand: brand,
      size: selectedSize,
      tag_image: item5?.data.url,
      price: price,
      location: location,
      state: customersState,
      delivery_mode: freeShipping,
      inStock: '5',
    })
  }

  console.log(productImages)
  return (
    <Wrapper>
      <article className='container'>
        <section className='product-gallery'>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
              <img src={item1?.data.url} alt='' />
            </button>
            <input type='file' name='myfile' onChange={handleFileChange1} />
          </div>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
              <img src={item2?.data.url} alt='' />
            </button>
            <input type='file' name='myfile' onChange={handleFileChange2} />
          </div>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
              <img src={item3?.data.url} alt='' />
            </button>
            <input type='file' name='myfile' onChange={handleFileChange3} />
          </div>
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <RiGalleryLine />
              <img src={item4?.data.url} alt='' />
            </button>
            <input type='file' name='myfile' onChange={handleFileChange4} />
          </div>
        </section>

        <form>
          <div>
            <label>
              Item title <span className='text-red'>*</span>
            </label>
            <span className='item-label'> max of 4 words</span>
            <input
              type='text'
              name='name'
              value={itemTitle}
              onChange={handleTitleChange}
            />
            <p className='text-sm'>
              What are you selling ? include words that your buyers would search
              for
            </p>
          </div>
          <div>
            <label>
              Product Description <span className='text-red'>*</span>
            </label>
            <input
              type='text'
              name='product Description'
              value={productDescription}
              onChange={handleDescriptionChange}
            />
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
                {selectedCategory + ' -> ' + selectedSize ||
                  'Select a category'}
                <span onClick={toggleCategories}>
                  <SlArrowDown />
                </span>
              </div>
              {isCategoriesOpen && (
                <ul className='options-list-category'>
                  {options.map((option) => (
                    <li
                      key={option.category_id}
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
              <input
                type='text'
                name='brand'
                value={brand}
                onChange={handleBrandChange}
              />
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
              <input type='file' name='myfile' onChange={handleFileChange5} />
              <img src={item5?.data.url} alt='' />
            </div>
            <div>
              <label>Size Description</label>
              <input
                type='text'
                name='size-description'
                value={sizeDescription}
                onChange={handleSizeDescriptionChange}
              />
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
            <input
              type='text'
              name='price'
              value={price}
              onChange={handlePriceChange}
            />
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
              <input
                type='text'
                name='location'
                value={location}
                onChange={handleLocationChange}
              />
              <p className='text-sm'>
                house number, street name, and city. Include any landmarks near
                location
              </p>
            </div>
            <div>
              <label>State</label>
              <input
                type='text'
                name='state'
                value={customersState}
                onChange={handleCustomersStateChange}
              />
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
                <input
                  type='checkbox'
                  checked={freeShipping === null ? false : freeShipping}
                  onChange={handleFreeShippingToggle}
                />
                <span class='slider round'></span>
              </label>
              <p>Buyer pays</p>
              <span>
                <IoAlertCircleOutline />
              </span>
            </div>
            <div className='toggler-btn'>
              <label className='switch'>
                <input
                  type='checkbox'
                  checked={paidShipping === null ? false : paidShipping}
                  onChange={handlePaidShippingToggle}
                />
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
              <button onClick={(e) => handleSumbitForReview(e)}>
                Submit for Review
              </button>
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
