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
import { useUserLogin } from '../../utils/usersApi'
import { useDispatch, useSelector } from 'react-redux'
import { closeLoginModal } from '../../features/user/userSlice'
import { ForgetPassword } from './index'

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch(closeLoginModal())
  }

  const [openForgetPassword, setOpenForgetPassword] = useState(false)

  const handleOpenForgetPassword = () => {
    setOpenForgetPassword(true)
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

          <button className='btn signin' type='submit'>
            Sign In
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
        <p className='forget-pword text-green'>Sign Up with Email</p>
      </Wrapper>
      {openForgetPassword && (
        <ForgetPassword
          openForgetModal={openForgetPassword}
          closeForgetModal={handleCloseForgetPassword}
        />
      )}
    </LoginWrapper>
  )
}

export default Login
