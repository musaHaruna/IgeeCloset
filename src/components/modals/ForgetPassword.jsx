import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { AiOutlineClose } from 'react-icons/ai'
import { Logo } from '../global'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserLogin } from '../../utils/usersApi'
import { useDispatch, useSelector } from 'react-redux'
import { closeLoginModal } from '../../features/user/userSlice'
import ForgetWrapper from './wrappers/ForgetWrapper'
import OTP from './OTP'

const ForgetPassword = ({ openForgetModal, closeForgetModal }) => {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
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

  const closeOptModal = () => {
    setOtp(false)
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
    dispatch(closeLoginModal())
  }
  return (
    <ForgetWrapper openModal={openForgetModal}>
      <Wrapper>
        <div className='close'>
          <AiOutlineClose onClick={closeForgetModal} className='icon ' />
        </div>
        <div className='center'>
          <Logo />
        </div>
        <h3 cla>Welcome Back!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Username/E-mail Address
              <input
                type='text'
                {...register('username')}
                placeholder='Type your e-mail or username'
              />
              {errors.username && <p>{errors.username.message}</p>}
            </label>
          </div>

          <button onClick={openOtpModal} className='btn signin' type='submit'>
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
