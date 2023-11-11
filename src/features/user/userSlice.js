import { createSlice } from '@reduxjs/toolkit'
import { getUserFromLocalStorage } from '../../utils/localStorage'

const initialState = {
  user: getUserFromLocalStorage(),
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload
    },
    openLoginModal: (state) => {
      state.isLoginModalOpen = true
    },
    closeLoginModal: (state) => {
      state.isLoginModalOpen = false
    },
    openSignUpModal: (state) => {
      state.isSignUpModalOpen = true
    },
    closeSignUpModal: (state) => {
      state.isSignUpModalOpen = false
    },
  },
})

export const {
  loginUser,
  openLoginModal,
  closeLoginModal,
  openSignUpModal,
  closeSignUpModal,
} = userSlice.actions

export default userSlice.reducer
