import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  openSignUpModal,
  openLoginModal,
  logoutUser,
} from '../features/user/userSlice'
import { Login } from '../components/modals'

const ProtectedRoute = ({ children }) => {
  const { isSignUpModalOpen, isLoginModalOpen, user } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()
  dispatch(openLoginModal())

  if (!user) {
    {
      isLoginModalOpen && <Login />
    }
    return <Navigate to='/' />
  }
  return children
}
export default ProtectedRoute
