const NewPasswordWrapper = ({ openNewPassword, children }) => {
  const modalStyle = {
    display: openNewPassword ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
  }

  return (
    <article style={modalStyle}>
      <div style={contentStyle}>{children}</div>
    </article>
  )
}

export default NewPasswordWrapper
