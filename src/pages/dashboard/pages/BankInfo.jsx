import Wrapper from '../../../assets/css/Profile'
import { useEffect, useState } from 'react'
import {
  useFetchBankInfo,
  useUpdateBankInfo,
} from '../../../utils/usersDashboardApi'
import { toast } from 'react-toastify'
import { CiEdit } from 'react-icons/ci'

const BankInfo = () => {
  const [isEditable, setIsEditable] = useState(false)
  const handleEditButtonClick = () => {
    setIsEditable(true)
  }
  const handleSaveButtonClick = () => {
    setIsEditable(false)
  }
  const [formData, setFormData] = useState({})
  const { isLoading, isError, data } = useFetchBankInfo()
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
  const { updateBankInfo } = useUpdateBankInfo()

  useEffect(() => {
    setFormData(data)
  }, [data])

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log(formData)
    updateBankInfo({
      name: formData.name,
      account_name: formData.account_name,
      account_number: formData.account_number,
    })
    if (isEditable === false) {
      return
    } else setIsEditable(false)
    toast.success('Bank details successfully edited')
  }
  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>There was an error...</p>
  }

  return (
    <Wrapper>
      <h4>Money made from selling your items will be sent here</h4>
      <form onSubmit={handleSumbit}>
        <div>
          <div className='edit' onClick={handleEditButtonClick}>
            <CiEdit />
          </div>
          <label>Bank Name</label>
          <input
            type='text'
            name='name'
            placeholder='Fcmb'
            value={formData?.name}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div>
          <label>Account Name</label>
          <input
            type='text'
            name='account_name'
            placeholder='Christy James'
            value={formData?.account_name}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <div>
          <label>Account Number </label>
          <input
            type='text'
            name='account_number'
            placeholder='0042181822'
            value={formData?.account_number}
            onChange={handleInputChange}
            disabled={!isEditable}
          />
        </div>
        <button className='save-changes' type='submit'>
          Save Changes
        </button>
      </form>
    </Wrapper>
  )
}

export default BankInfo
