import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { AiOutlineClose } from 'react-icons/ai'
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
  return (
    <OtpWrapper modal={openModal}>
      <Wrapper>
        <div className='close'>
          <AiOutlineClose onClick={closeModal} className='icon ' />
        </div>
        <div className='center'>
          <Logo />
        </div>
        <h2>OTP</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            onClick={openNewPasswordModal}
            className='btn signin'
            type='submit'
          >
            Submit
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
