import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import OtpInput from 'react-otp-input'
import { IoChevronBackOutline } from 'react-icons/io5'

import { Logo } from '../global'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserLogin } from '../../utils/usersApi'
import { useDispatch, useSelector } from 'react-redux'
import { closeLoginModal, openLoginModal } from '../../features/user/userSlice'
import OtpWrapper from './wrappers/OtpWrapper'
import NewPassword from './NewPassword'

const OTP = ({ openModal, closeModal, closeForgetModal }) => {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const { userLogin } = useUserLogin()

  const onSubmit = (data) => {
    userLogin(data, {
      onSuccess: () => {
        console.log(data)
      },
    })
  }

  const [otp, setOtp] = useState('')

  const handleChange = (code) => setCode(code)
  return (
    <OtpWrapper modal={openModal}>
      <Wrapper>
        <div className='close'>
          <IoChevronBackOutline onClick={closeModal} className='icon back' />
        </div>
        <div className='center'>
          <Logo />
        </div>

        <form className='otp-form' onSubmit={handleSubmit(onSubmit)}>
          <h3>Enter the code</h3>
          <p>A code was sent to f*******@gmail.com</p>
          <input type='text' />
          <p className='left'>resend code in </p>
          <p className='resend' onClick={openNewPasswordModal}>Resend OTP </p>
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
