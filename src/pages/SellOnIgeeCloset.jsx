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
import { RotatingLines } from 'react-loader-spinner'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { toast } from 'react-toastify'

const SellOnIgeeCloset = () => {
  const [selectedSizes, setSelectedSizes] = useState(null)
  const [isOptionsOpen, setOptionsOpen] = useState(false)
  const [itemTitle, setItemTitle] = useState('')
  const [sizeDescription, setSizeDescription] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('')
  const [customersState, setCustomersState] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [brand, setBrand] = useState('')
  const [freeShipping, setFreeShipping] = useState(null)
  const [paidShipping, setPaidShipping] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Men')
  const [selectedSize, setSelectedSize] = useState('Shirts')
  const [isCategoriesOpen, setCategoriesOpen] = useState(false)
  const [isSizesOpen, setSizesOpen] = useState(false)
  const [priceError, setPriceError] = useState('')
  const [categoryID, setCategoryID] = useState(null)
  const [uploadFile1, setUploadFile1] = useState(null)
  const [uploadFile2, setUploadFile2] = useState(null)
  const [uploadFile3, setUploadFile3] = useState(null)
  const [uploadFile4, setUploadFile4] = useState(null)
  const [uploadFile5, setUploadFile5] = useState(null)

  const { uploadItem1, item1, status1 } = useUploadItem1()
  const { uploadItem2, item2, status2 } = useUploadItem2()
  const { uploadItem3, item3, status3 } = useUploadItem3()
  const { uploadItem4, item4, status4 } = useUploadItem4()
  const { uploadItem5, item5, status5 } = useUploadItem5()
  const { submitForReview } = useSubmitForReview()

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
  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  let [productImages, setProductImages] = useState('')

  const handleTitleChange = (e) => {
    setItemTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setProductDescription(e.target.value)
  }

  const handleBrandChange = (e) => {
    setBrand(e.target.value)
  }

  const handleSizeDescriptionChange = (e) => {
    setSizeDescription(e.target.value)
  }

  const handlePriceChange = (e) => {
    const value = e.target.value
    setPrice(value)

    // Validation: Check if the input is a valid number
    const isValidNumber = /^[0-9]+$/.test(value)

    if (!isValidNumber) {
      setPriceError('Please enter a valid number')
    } else {
      setPriceError('')
    }
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  const handleCustomersStateChange = (e) => {
    setCustomersState(e.target.value)
  }

  // Event handlers to update the states when the inputs change
  const handleFreeShippingToggle = () => {
    setFreeShipping((prevValue) => (prevValue === null ? '2' : !prevValue))
  }

  const handlePaidShippingToggle = () => {
    setPaidShipping((prevValue) => (prevValue === null ? '1' : !prevValue))
  }

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

  const handleSelectSizes = (size) => {
    setSelectedSizes(size)

    setOptionsOpen(false)
  }

  const toggleOptions = () => {
    setOptionsOpen(!isOptionsOpen)
  }

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

  productImages += item1?.data.url + ', '
  productImages += item2?.data.url + ', '
  productImages += item3?.data.url + ', '
  productImages += item4?.data.url + ','

  const handleSumbitForReview = (e) => {
    e.preventDefault()

    // Basic validations
    if (!itemTitle.trim()) {
      toast.error('Title is required')
      return
    }

    if (!price || isNaN(price) || price <= 0) {
      toast.error('Please enter a valid positive number for price')
      return
    }

    if (!selectedSize) {
      toast.error('Please select a size')
      return
    }

    // Additional validations
    if (!productImages || productImages.length === 0) {
      toast.error('Please upload at least one image')
      return
    }

    if (!item1?.data.url) {
      toast.error('Please provide an index image')
      return
    }

    // You can add more validations for other fields as needed

    // If all validations pass, proceed to submitForReview
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

  return (
    <Wrapper>
      <article className='container'>
        <Link className='back-to-home' to={'/'}>
          <FaArrowLeftLong />
          Back
        </Link>
        <h4 className='sell-on-igee'>
          Sell on <span className='text-green'>i</span>Gee{' '}
          <span className='text-green'>Closet</span>
        </h4>
        <section className='product-gallery'>
          <div class='upload-btn-wrapper-img'>
            <div className='upload-icon'>
              <button class='btn'>
                {status1 === 'pending' && (
                  <RotatingLines
                    type='Oval'
                    style={{ color: '#FFF' }}
                    height={100}
                    width={100}
                  />
                )}
                {status1 === 'error' && <p>Error occurred</p>}
                {status1 !== 'pending' && status !== 'error' && (
                  <>
                    {item1?.data.url ? (
                      <img
                        src={item1.data.url}
                        alt=''
                        className='upload-icon'
                      />
                    ) : (
                      <RiGalleryLine className='upload-icon' />
                    )}
                  </>
                )}
              </button>
              <input type='file' name='myfile' onChange={handleFileChange1} />
            </div>
          </div>
          <div class='upload-btn-wrapper-img'>
            <div>
              <button class='btn'>
                {status2 === 'pending' && (
                  <RotatingLines
                    type='Oval'
                    style={{ color: '#FFF' }}
                    height={100}
                    width={100}
                  />
                )}
                {status2 === 'error' && <p>Error occurred</p>}
                {status2 !== 'pending' && status2 !== 'error' && (
                  <>
                    {item2?.data.url ? (
                      <img
                        src={item2.data.url}
                        alt=''
                        className='upload-icon'
                      />
                    ) : (
                      <RiGalleryLine className='upload-icon' />
                    )}
                  </>
                )}
              </button>
              <input type='file' name='myfile' onChange={handleFileChange2} />
            </div>
          </div>
          <div class='upload-btn-wrapper-img '>
            <div>
              <button class='btn'>
                {status3 === 'pending' && (
                  <RotatingLines
                    type='Oval'
                    style={{ color: '#FFF' }}
                    height={100}
                    width={100}
                  />
                )}
                {status3 === 'error' && <p>Error occurred</p>}
                {status3 !== 'pending' && status3 !== 'error' && (
                  <>
                    {item3?.data.url ? (
                      <img
                        src={item3.data.url}
                        alt=''
                        className='upload-icon'
                      />
                    ) : (
                      <RiGalleryLine className='upload-icon' />
                    )}
                  </>
                )}
              </button>
              <input type='file' name='myfile' onChange={handleFileChange3} />
            </div>
          </div>
          <div class='upload-btn-wrapper-img'>
            <div>
              <button class='btn'>
                {status4 === 'pending' && (
                  <RotatingLines
                    type='Oval'
                    style={{ color: '#FFF' }}
                    height={100}
                    width={100}
                  />
                )}
                {status4 === 'error' && <p>Error occurred</p>}
                {status4 !== 'pending' && status4 !== 'error' && (
                  <>
                    {item4?.data.url ? (
                      <img
                        src={item4.data.url}
                        alt=''
                        className='upload-icon'
                      />
                    ) : (
                      <RiGalleryLine className='upload-icon' />
                    )}
                  </>
                )}
              </button>
              <input type='file' name='myfile' onChange={handleFileChange4} />
            </div>
          </div>
        </section>

        <form>
          <div>
            <label>
              Item title <span className='text-red'>*</span>
            </label>
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
                {selectedCategory + ' -> ' + (selectedSize || 'Shirt') ||
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
            <div class='upload-btn-wrapper-img tags'>
              <div>
                <button class='btn'>
                  {status5 === 'pending' && (
                    <RotatingLines
                      type='Oval'
                      style={{ color: '#FFF' }}
                      height={50}
                      width={50}
                    />
                  )}
                  {status5 === 'error' && <p>Error occurred</p>}
                  {status5 !== 'pending' && status5 !== 'error' && (
                    <>
                      {item5?.data.url ? (
                        <img
                          src={item5.data.url}
                          alt=''
                          className='upload-icon'
                        />
                      ) : (
                        <>Upload</>
                      )}
                    </>
                  )}
                </button>
                <input type='file' name='myfile' onChange={handleFileChange5} />
              </div>
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
            {priceError && <p style={{ color: 'red' }}>{priceError}</p>}
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
                  checked={freeShipping === null ? '2' : freeShipping}
                  onChange={handleFreeShippingToggle}
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
