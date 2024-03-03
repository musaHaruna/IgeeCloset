import React, { useState } from 'react'
import Wrapper from '../../assets/css/Login'
import { IoChevronBackOutline } from 'react-icons/io5'
import { useEffect } from 'react'
import { Logo } from '../global'
import * as yup from 'yup'
import {
  useOtpCode,
  useForgotPassword,
} from '../../utils/usersAuthenticationApi'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeLoginModal,
  openLoginModal,
  setOTP,
} from '../../features/user/userSlice'
import OtpWrapper from './wrappers/OtpWrapper'
import NewPassword from './NewPassword'
import { RotatingLines } from 'react-loader-spinner'

const OTP = ({
  openModal,
  closeModal,
  closeForgetModal,
  openForgetModal,
  openForgetPasswordModal,
  closeOtp,
}) => {
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0))
    }, 1000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array ensures the effect runs once on mount

  const handleResend = () => {
    // Handle OTP resend logic here
    console.log('Resend OTP')
    // Reset the timer when the resend button is clicked
    setSeconds(60)
  }

  const formatTime = () => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? `0${secs}` : secs}`
  }

  const schema = yup.object().shape({
    otp: yup.string().required(),
  })

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const [newPassword, setNewPassword] = useState(false)

  const openNewPasswordModal = () => {
    setNewPassword(true)
  }
  const openForgetPassowrdModal = () => {
    closeOtp()
    openForgetPasswordModal()
  }
  const closeNewPasswordModal = () => {
    closeModal()
    setNewPassword(true)
  }

  const openLogin = () => {
    dispatch(openLoginModal())
  }

  const [otp, setOtp] = useState(['', '', '', ''])
  const { otpCode, status } = useOtpCode()
  const handleChange = (e, index) => {
    const value = e.target.value

    // Check for backspace key
    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      // Clear the current input
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp]
        newOtp[index] = ''
        return newOtp
      })

      // Focus on the previous input, unless it's the first box (index 0)
      if (index > 0 && e.target.previousSibling) {
        e.target.previousSibling.focus()
      }
    } else {
      // Update the current input
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp]
        newOtp[index] = value
        return newOtp
      })

      // Focus on the next input
      if (e.target.nextSibling && index < otp.length - 1) {
        e.target.nextSibling.focus()
      }
    }
  }

  // Console log all four characters
  useEffect(() => {
    const joinedOtp = otp.join('')
    dispatch(setOTP(joinedOtp))

    // Check if joinedOtp has a length of 4 before logging
    if (joinedOtp.length === 4) {
      if (status === 'success') {
      }

      otpCode(
        { joinedOtp },
        {
          onSuccess: () => {
            openNewPasswordModal()
          },
        }
      )
    }
  }, [otp])

  console.log(status)

  return (
    <OtpWrapper modal={openModal}>
      <Wrapper>
        {status === 'pending' && (
          <div className='loader-spinner'>
            <RotatingLines
              type='Oval'
              style={{ color: '#FFF' }}
              height={100}
              width={100}
            />
          </div>
        )}
        <div className='close'>
          <IoChevronBackOutline
            onClick={openForgetPassowrdModal}
            className='icon back'
          />
        </div>
        <div className='center'>
          <Logo />
        </div>

        <form className='otp-form'>
          <h3>Enter the code</h3>
          <p>A code was sent to f*******@gmail.com</p>
          <div className='otp-box'>
            {otp.map((digit, index) => (
              <input
                type='number'
                key={index}
                value={digit}
                onChange={(e) => {
                  handleChange(e, index)
                }}
                maxLength={1}
              />
            ))}
          </div>
          <p className='left'>
            Resend code in: <span className='text-green'>{formatTime()}</span>
          </p>
        </form>
        {seconds === 0 && (
          <button className='resend-otp' onClick={openForgetPassowrdModal}>
            Resend OTP
          </button>
        )}

        {newPassword && (
          <NewPassword
            openNewPassword={newPassword}
            closeNewPassword={closeNewPasswordModal}
            openNewLogin={openLogin}
            closeForgetModal={closeForgetModal}
            closeModal={closeModal}
          />
        )}
      </Wrapper>
    </OtpWrapper>
  )
}

export default OTP
