import { useSelector } from 'react-redux'

const ModalWrapper = ({ children }) => {
  const { isLoginModalOpen } = useSelector((state) => state.user)
  const modalStyle = {
    display: isLoginModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  const contentStyle = {
    backgroundColor: 'white',
    width: '50%',
    margin: 'auto',
    marginTop: '3%',
    height: '500px',
    overflowY: 'hidden',
    borderRadius: '5px',
  }

  return (
    <article style={modalStyle}>
      <div style={contentStyle}>{children}</div>
    </article>
  )
}

export default ModalWrapper
