import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { AiOutlineClose } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import LoginWrapper from './wrappers/LoginWrappers'
import { Logo } from '../global'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserLogin } from '../../utils/usersAuthenticationApi'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeLoginModal,
  loginUser,
  openSignUpModal,
} from '../../features/user/userSlice'
import { ForgetPassword } from './index'
import { RotatingLines } from 'react-loader-spinner'

const Login = () => {
  const dispatch = useDispatch()
  const handleOpenModal = () => {
    dispatch(closeLoginModal())
    dispatch(openSignUpModal())
    document.body.style.overflow = 'hidden'
  }

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })

  const handleCloseModal = () => {
    dispatch(closeLoginModal())
    document.body.style.overflowY = 'scroll'
  }

  const [openForgetPassword, setOpenForgetPassword] = useState(false)

  const handleOpenForgetPassword = () => {
    setOpenForgetPassword(true)
    console.log('Hello password')
  }

  const handleCloseForgetPassword = () => {
    setOpenForgetPassword(false)
  }

  console.log(openForgetPassword)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { userLogin, status } = useUserLogin()

  const onSubmit = (data) => {
    userLogin(data, {
      onSuccess: () => {
        handleCloseModal()
      },
      onError: () => {
        return
      },
    })
  }

  return (
    <LoginWrapper>
      <Wrapper>
        <div onClick={handleCloseModal} className='close'>
          <AiOutlineClose className='icon ' />
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
          <div>
            <label>
              Password:
              <input
                type='password'
                {...register('password')}
                placeholder='Type your password'
              />
              {errors.password && <p>{errors.password.message}</p>}
            </label>
          </div>

          <button
            className='btn signin'
            type='submit'
            disabled={status === 'pending' ? true : false}
          >
            {status === 'pending' ? 'Loading...' : 'Sign in'}
          </button>
          <p onClick={handleOpenForgetPassword} className='forget-pword'>
            Forget <span className='text-green'>Password?</span>
          </p>
        </form>
        <p className='or login-or'>or</p>
        <button className='btn google '>
          <FcGoogle className='social-icon' />
          Sign up with Google
        </button>
        <button className='btn fb'>
          <BsFacebook className='social-icon' />
          Sign up with Facebook
        </button>
        <p className='forget-pword text-green' onClick={handleOpenModal}>
          Sign Up with Email
        </p>
      </Wrapper>
      {openForgetPassword && (
        <ForgetPassword
          openForgetModal={openForgetPassword}
          openForgetPasswordModal={handleOpenForgetPassword}
          closeForgetModal={handleCloseForgetPassword}
        />
      )}
    </LoginWrapper>
  )
}

export default Login
