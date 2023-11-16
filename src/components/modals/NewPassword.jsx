import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { AiOutlineClose } from 'react-icons/ai'
import { Logo } from '../global'
import { set, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useUserLogin } from '../../utils/usersApi'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginModal } from '../../features/user/userSlice'
import NewPasswordWrapper from './wrappers/NewPasswordWrapper'
import NewPasswordSuccess from './NewPasswordSuccess'
const NewPassword = ({
  openNewPassword,
  closeNewPassword,
  openNewLogin,
  closeForgetModal,
  closeModal,
}) => {
  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
  })

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
    <NewPasswordWrapper openNewPassword={openNewPassword}>
      <Wrapper>
        <div className='close'>
          <AiOutlineClose onClick={closeNewPassword} className='icon ' />
        </div>
        <div className='center'>
          <Logo />
        </div>
        <h2>New Passowrd</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button onClick={openSuccess} className='btn signin' type='submit'>
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
