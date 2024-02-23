import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { AiOutlineClose } from 'react-icons/ai'
import { useForgotPassword } from '../../utils/usersAuthenticationApi'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { closeLoginModal } from '../../features/user/userSlice'
import ForgetWrapper from './wrappers/ForgetWrapper'
import { ForgetPword } from '../../assets/images'
import OTP from './OTP'

const ForgetPassword = ({ openForgetModal, closeForgetModal }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Invalid email address'
      )
      .required('Email is required'),
  })

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch(closeLoginModal())
  }

  const [otp, setOtp] = useState(false)
  console.log(otp)

  const openOtpModal = () => {
    setOtp(true)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { forgotPassword, isError } = useForgotPassword()

  const onSubmit = (data) => {
    forgotPassword(data, {
      onSuccess: () => {
        openOtpModal()
        alert("hello")
      },
    })
  }
  return (
    <ForgetWrapper openModal={openForgetModal}>
      <Wrapper>
        <div className='close'>
          <AiOutlineClose onClick={closeForgetModal} className='icon ' />
        </div>

        <div className='forget-img'>
          <img src={ForgetPword} alt='' />
        </div>
        <h3 className='forget-head'>Forget Password</h3>
        <p className='forget-p'>
          No need to stress! If it happens, just type in the address linked to
          your account.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className='e-mail'>
              E-mail Address
              <input
                type='text'
                {...register('email')}
                placeholder='Type your e-mail or username'
              />
              {errors.username && <p>{errors.username.message}</p>}
            </label>
          </div>

          <button className='btn signin forget' type='submit'>
            Submit
          </button>
        </form>
        {otp && (
          <OTP
            openModal={otp}
            closeModal={handleCloseModal}
            closeForgetModal={closeForgetModal}
          />
        )}
      </Wrapper>
    </ForgetWrapper>
  )
}

export default ForgetPassword
