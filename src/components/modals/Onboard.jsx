import { useState } from 'react'
import ModalWrapper from './wrappers/ModalWrapper'
import Wrapper from '../../assets/css/Login'
import { useDispatch, useSelector } from 'react-redux'

import { Login, SignUp } from './index'

const Onboard = () => {
  const dispatch = useDispatch()
  const { isSignUpModalOpen } = useSelector((state) => state.user)

  return (
    <ModalWrapper>
      <Wrapper>{isSignUpModalOpen ? <SignUp /> : <Login/>}</Wrapper>
    </ModalWrapper>
  )
}

export default Onboard
