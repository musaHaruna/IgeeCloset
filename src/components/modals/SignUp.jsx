import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { useDispatch } from 'react-redux'
import { openLoginModal, closeSignUpModal } from '../../features/user/userSlice'
import { AiOutlineClose } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { Logo } from '../global'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRegisterUser } from '../../utils/usersApi'

import SignUpWrapper from './wrappers/SignUpWrapper'

const SignUp = () => {
  const dispatch = useDispatch()
  const handleOpenLogin = () => {
    dispatch(closeSignUpModal())
    dispatch(openLoginModal())
  }

 
  const handleCloseSignup = () => {
    dispatch(closeSignUpModal())
  }

  const schema = yup.object().shape({
    username: yup.string().required('closet name is required'),
    email: yup.string().required('username is required'),
    name: yup.string().required('phone number is required'),
    phone: yup.string().required('email address is required'),
    password: yup.string().required('password is required'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { registerUser } = useRegisterUser()

  const onSubmit = (data) => {
    registerUser(data, {
      onSuccess: () => {},
    })
  }

  return (
    <SignUpWrapper>
      <Wrapper>
        <div className='close'>
          <AiOutlineClose onClick={handleCloseSignup} className='icon ' />
        </div>
        <div className='center'>
          <Logo />
        </div>
        <form className='signup' onClick={handleSubmit(onSubmit)}>
          <button className='btn google '>
            <FcGoogle className='social-icon' />
            Sign up with Google
          </button>
          <button className='btn fb'>
            <BsFacebook className='social-icon' />
            Sign up with Facebook
          </button>

          <p className='or'>or continue with email</p>
          <div>
            <label>
              Username
              <input type='text' {...register('username')} />
            </label>
          </div>
          <div>
            <label>
              E-mail
              <input type='text' {...register('email')} />
            </label>
          </div>
          <div>
            <label>
              Closet name
              <input type='text' {...register('name')} />
            </label>
          </div>
          <div>
            <label>
              Phone
              <input type='text' {...register('phone')} />
            </label>
          </div>
          <div>
            <label>
              Password
              <input type='password' {...register('password')} />
            </label>
          </div>

          <button className='btn signin' type='submit'>
            Sign Up
          </button>
        </form>
        <p className='login-already'>
          Got an account already?{' '}
          <span className='text-green' onClick={handleOpenLogin}>
            Login
          </span>
        </p>
      </Wrapper>
    </SignUpWrapper>
  )
}

export default SignUp
