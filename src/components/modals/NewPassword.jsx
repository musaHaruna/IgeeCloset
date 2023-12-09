import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { AiOutlineClose } from 'react-icons/ai'
import { Logo } from '../global'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginModal } from '../../features/user/userSlice'
import NewPasswordWrapper from './wrappers/NewPasswordWrapper'
import NewPasswordSuccess from './NewPasswordSuccess'
import { useResetPassword } from '../../utils/usersAuthenticationApi'
const NewPassword = ({
  openNewPassword,
  closeNewPassword,
  openNewLogin,
  closeForgetModal,
  closeModal,
}) => {
  const { isSignUpModalOpen, isLoginModalOpen, user } = useSelector(
    (state) => state.user
  )

  const dispatch = useDispatch()

  const [success, setSuccess] = useState(false)

  const openSuccess = () => {
    setSuccess(true)
  }
  const confirmSuccess = () => {
    closeForgetModal()
  }
  console.log(isLoginModalOpen)
  const schema = yup.object().shape({
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { resetPassword } = useResetPassword()

  const onSubmit = (data) => {
    resetPassword(data, {
      onSuccess: () => {
        console.log(data)
        openSuccess()
      },
    })
  }
  return (
    <NewPasswordWrapper openNewPassword={openNewPassword}>
      <Wrapper>
        <div className='close'>
          <AiOutlineClose onClick={closeNewPassword} className='icon ' />
        </div>
        <div className='new-pword-center center'>
          <Logo />
        </div>
        <h3 className='text-align'>Create New Passowrd</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>New Password</label>
            <input type='text' {...register('password')} />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='text' {...register('confirmPassword')} />
          </div>
          <button className='btn signin' type='submit'>
            Submit
          </button>
        </form>
        {success && (
          <NewPasswordSuccess
            openSuccess={success}
            confirmLogin={confirmSuccess}
          />
        )}
      </Wrapper>
    </NewPasswordWrapper>
  )
}

export default NewPassword
