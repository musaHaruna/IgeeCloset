import React, { useState, useEffect } from 'react'
import Wrapper from '../../../assets/css/Profile'
import { ClosetBanner } from '../../../assets/images'
import { AiOutlineCamera } from 'react-icons/ai'
import {
  useFetchProfile,
  useUpdateProfile,
  useUpdateProfileImage,
} from '../../../utils/usersDashBoardApi'
import customFetch from '../../../utils/axios'

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false)
  const handleEditButtonClick = () => {
    setIsEditable(true)
  }

  const [uploadFile, setUploadFile] = useState(null)

  const handleFileChange = (e) => {
    setUploadFile(e.target.files[0])
  }

  const { updateProfileImage } = useUpdateProfileImage()

  const handleImageSubmit = () => {
    const formData = new FormData()

    // Append additional properties
    formData.append('type', 'image')
    formData.append('description', 'Profile picture')

    // Append the file
    formData.append('file', uploadFile)

    console.log('FormData:', formData)

    updateProfileImage({ formData })
  }
  const handleUpload = async () => {
    try {
      const formData = new FormData()

      // Append additional properties
      formData.append('type', 'image')
      formData.append('description', 'Profile picture')

      // Append the file
      formData.append('file', uploadFile)

      console.log('FormData:', formData)

      const response = await customFetch.post(
        'customer/profile/update-image',
        formData,
        {
          headers: {
            'Custom-Headers': 'value',
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      console.log('File uploaded:', response)
      // You can add additional logic here, such as displaying a success message.
    } catch (error) {
      console.error('Error uploading file:', error)
      // You can handle errors and display error messages here.
    }
  }

  const handleSaveButtonClick = () => {
    setIsEditable(false)
  }

  const { isLoading, isError, data } = useFetchProfile()

  useEffect(() => {
    setFormData(data)
  }, [data])

  const [formData, setFormData] = useState({})

  const handleInputChange = (e) => {
    if (isEditable) {
      const { name, value } = e.target
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
      console.log(name, value)
    }
  }

  const { mutate } = useUpdateProfile()

  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>There was an error...</p>
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log(formData)
    mutate({ username: 'musa', phoneNumber: '123' })
  }

  return (
    <Wrapper>
      <article className='user-banner'>
        <div className='banner'>
          <AiOutlineCamera className='upload-pic' />
          <img src={ClosetBanner} alt='' />
        </div>
        <div className='user-profile-img'>
          <img src={ClosetBanner} alt='' />
          <div>
            <input type='file' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <AiOutlineCamera className='camera' />
          </div>
        </div>
      </article>
      <h4 className='text-green'>User information</h4>
      <article>
        <form onSubmit={handleSumbit}>
          <div>
            <label>Account Name</label>
            <input
              type='text'
              name='name'
              placeholder='Otuekong Archibong'
              value={formData?.name}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label>Email Address</label>
            <input
              type='text'
              name='email'
              placeholder='Otuekongdomino@gmail.com'
              value={formData?.email}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label>Phone number </label>
            <input
              type='text'
              name='phone'
              placeholder='2348104436511'
              value={formData?.phone}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type='text'
              name='address'
              placeholder='No. 57 Abuja, area 11 Nigeria'
              value={formData?.address}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label>State</label>
            <input
              type='text'
              name='state'
              placeholder='FCT'
              value={formData?.state}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label>Delivery Address</label>
            <input
              type='text'
              name='address'
              placeholder='No. 57 Abuja, area 11 Nigeria'
              value={formData?.address}
              onChange={handleInputChange}
              disabled={!isEditable}
            />
          </div>
          <div>
            <label>Bio</label>
            <textarea
              name='bio'
              id='bio'
              cols='20'
              rows='5'
              value={formData?.bio}
              onChange={handleInputChange}
              disabled={!isEditable}
            ></textarea>
          </div>
          <button type='button' onClick={handleEditButtonClick}>
            Enable Editing
          </button>
          <button type='submit' className='btn-green'>
            Save
          </button>
          <button type='button' className='btn-red'>
            Delete my account
          </button>
        </form>
      </article>
    </Wrapper>
  )
}

export default Profile
