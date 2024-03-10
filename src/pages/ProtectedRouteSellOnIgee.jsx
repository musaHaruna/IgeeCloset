import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  openSignUpModal,
  openLoginModal,
  closeLoginModal,
  logoutUser,
} from '../features/user/userSlice'
import { Login } from '../components/modals'

const ProtectedRouteSellOnIgee = ({ children }) => {
  const { isSignUpModalOpen, isLoginModalOpen, user } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()

  if (!user) {
    dispatch(openLoginModal())
    {
      isLoginModalOpen && <Login />
    }
    // dispatch(closeLoginModal())
    return <Navigate to='/' />
  }
  return children
}
export default ProtectedRouteSellOnIgee
