import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { useDispatch } from 'react-redux'
import { openLoginModal, closeSignUpModal } from '../../features/user/userSlice'

import SignUpWrapper from './wrappers/SignUpWrapper'

const SignUp = () => {
  const dispatch = useDispatch()
  const handleOpenModal = () => {
    dispatch(closeSignUpModal())
    dispatch(openLoginModal())
  }

  return (
    <SignUpWrapper>
      <Wrapper>
        <h1>SignUp</h1>
        <button onClick={handleOpenModal}>Login</button>
      </Wrapper>
    </SignUpWrapper>
  )
}

export default SignUp
