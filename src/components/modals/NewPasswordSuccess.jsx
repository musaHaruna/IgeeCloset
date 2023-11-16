import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { AiOutlineClose } from 'react-icons/ai'
import { Logo } from '../global'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserLogin } from '../../utils/usersApi'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginModal } from '../../features/user/userSlice'
import NewPasswordSuccessWrapper from './wrappers/NewPasswordSuccessWrapper'

const NewPasswordSuccess = ({ openSuccess, confirmLogin }) => {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
  })

  const user = useSelector((state) => state.user)

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
    <NewPasswordSuccessWrapper succesModal={openSuccess}>
      <Wrapper>
        <div className='close'>
          <AiOutlineClose className='icon ' />
        </div>
        <div className='center'>
          <Logo />
        </div>
        <h2>New Passowrd Success</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button onClick={confirmLogin} className='btn signin' type='submit'>
            Submit
          </button>
        </form>
      </Wrapper>
    </NewPasswordSuccessWrapper>
  )
}

export default NewPasswordSuccess
