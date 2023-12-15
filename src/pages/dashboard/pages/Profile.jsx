import React, { useState, useEffect } from 'react'
import Wrapper from '../../../assets/css/Profile'
import { ClosetBanner } from '../../../assets/images'
import { AiOutlineCamera } from 'react-icons/ai'
import { CiEdit } from 'react-icons/ci'
import {
  useFetchProfile,
  useUpdateProfile,
  useUpdateProfileImage,
} from '../../../utils/usersDashBoardApi'
import { toast } from 'react-toastify'

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false)
  const handleEditButtonClick = () => {
    setIsEditable(true)
  }

  const [uploadFile, setUploadFile] = useState(null)
  console.log(uploadFile)

  const { updateProfileImage } = useUpdateProfileImage()

  useEffect(() => {
    if (uploadFile) {
      const formData = new FormData()

      // Append additional properties
      formData.append('type', 'image')
      formData.append('description', 'Profile picture')

      // Append the file
      formData.append('file', uploadFile)

      console.log('FormData:', formData)

      updateProfileImage({ formData })
    }
  }, [uploadFile])

  const handleFileChange = (e) => {
    setUploadFile(e.target.files[0])
  }

  const handleSaveButtonClick = () => {
    setIsEditable(false)
  }

  const { isLoading, isError, data } = useFetchProfile()

  useEffect(() => {
    setFormData(data)
  }, [data])

  console.log(data)

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
    mutate({
      username: formData.name,
      phoneNumber: formData.phone,
      address: formData.address,
      state: formData.state,
      bio: formData.bio,
    })
    if (isEditable === false) {
      return
    } else setIsEditable(false)
    toast.success('Profile successfully edited')
  }

  return (
    <Wrapper>
      <article className='user-banner'>
        <div className='banner'>
          <AiOutlineCamera className='upload-pic' />
          <img src={formData.image} alt='' />
        </div>
        <div className='user-profile-img'>
          <img src={formData?.image} alt='' />
          {/* <div>
            <input type='file' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <AiOutlineCamera className='camera' />
          </div> */}
          <div class='upload-btn-wrapper-img'>
            <button class='btn'>
              <AiOutlineCamera className='camera' />
            </button>
            <input type='file' onChange={handleFileChange} name='myfile' />
          </div>
        </div>
      </article>
      <div className='upload-flex'>
        <h4 className='text-green'>User information</h4>
        <div class=''>
          <button class='btn' onClick={handleEditButtonClick}>
            <CiEdit />
          </button>
        </div>
      </div>

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
