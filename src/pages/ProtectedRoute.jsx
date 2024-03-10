import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const { isSignUpModalOpen, isLoginModalOpen, user } = useSelector(
    (state) => state.user
  )

  if (!user) {
    return <Navigate to='/' />
  }
  return children
}
export default ProtectedRoute
