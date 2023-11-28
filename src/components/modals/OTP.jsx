import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Logo } from '../global'
import * as yup from 'yup'
import { useOtpCode, useForgotPassword } from '../../utils/usersApi'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeLoginModal,
  openLoginModal,
  setOTP,
} from '../../features/user/userSlice'
import OtpWrapper from './wrappers/OtpWrapper'
import NewPassword from './NewPassword'

const OTP = ({ openModal, closeModal, closeForgetModal }) => {
  const schema = yup.object().shape({
    otp: yup.string().required(),
  })

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch(closeLoginModal())
  }

  const [newPassword, setNewPassword] = useState(false)

  const openNewPasswordModal = () => {
    setNewPassword(true)
  }
  const closeNewPasswordModal = () => {
    closeModal()
    setNewPassword(true)
  }

  const openLogin = () => {
    dispatch(openLoginModal())
  }

  const [otp, setOtp] = useState(['', '', '', ''])

  const handleChange = (e, index) => {
    const value = e.target.value
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp]
      newOtp[index] = value
      return newOtp
    })
    if (e.target.nextSibling) {
      e.target.nextSibling.focus()
    }
  }
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // })

  const newOTP = parseInt(otp.join(''))
  console.log(newOTP)

  // const onSubmit = (data) => {
  //   otpCode(data, {
  //     onSuccess: () => {
  //       console.log(data)
  //     },
  //   })
  // }

  // const [number, setNumber] = useState('')

  // const handleChange2 = (event) => {
  //   // Ensure only numeric input
  //   const value = event.target.value.replace(/\D/g, '')

  //   // Limit to 4 digits
  //   if (value.length <= 4) {
  //     setNumber(value)
  //   }
  // }

  dispatch(setOTP(newOTP))
  const { otpCode } = useOtpCode()
  const handleSubmit = (e) => {
    e.preventDefault()
    otpCode({
      onSuccess: () => {
        console.log(data)
      },
    })
    openNewPasswordModal()
  }
  return (
    <OtpWrapper modal={openModal}>
      <Wrapper>
        <div className='close'>
          <IoChevronBackOutline onClick={closeModal} className='icon back' />
        </div>
        <div className='center'>
          <Logo />
        </div>

        <form className='otp-form'>
          <h3>Enter the code</h3>
          <p>A code was sent to f*******@gmail.com</p>
          <div className='otp-box'>
            {otp.map((digit, index) => (
              <input
                type='number'
                key={index}
                value={digit}
                onChange={(e) => {
                  handleChange(e, index)
                }}
                maxLength={1}
              />
            ))}
          </div>
          <p className='left'>resend code in </p>
          <button className='resend' onClick={handleSubmit}>
            Resend OTP{' '}
          </button>
        </form>

        {newPassword && (
          <NewPassword
            openNewPassword={newPassword}
            closeNewPassword={closeNewPasswordModal}
            openNewLogin={openLogin}
            closeForgetModal={closeForgetModal}
            closeModal={closeModal}
          />
        )}
      </Wrapper>
    </OtpWrapper>
  )
}

export default OTP
