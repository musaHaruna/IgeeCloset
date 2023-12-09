import { useSelector } from 'react-redux'

const LoginWrapper = ({ children }) => {
  const { isLoginModalOpen } = useSelector((state) => state.user)
  const modalStyle = {
    display: isLoginModalOpen ? 'block' : 'none',
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const contentStyle = {
    backgroundColor: 'white',
    width: '35%',
    margin: 'auto',
    marginTop: '1%',
    height: '540px',
    overflowY: 'hidden',
    padding: '1.5rem',
    borderRadius: '5px',
    zIndex: 3000
  }

  return (
    <article style={modalStyle}>
      <div style={contentStyle}>{children}</div>
    </article>
  )
}

export default LoginWrapper
