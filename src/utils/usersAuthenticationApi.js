import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginUser, openLoginModal } from '../features/user/userSlice'
import customFetch from './axios'
import { addUserToLocalStorage } from './localStorage'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const useRegisterUser = () => {
  const queryClient = useQueryClient()
  const {
    data,
    mutate: registerUser,
    isLoading,
  } = useMutation({
    mutationFn: ({ username, email, name, phone, password }) =>
      customFetch.post(
        `customer/register?username=${username}&email=${email}&name=${name}&phone=${phone}&password=${password}`,
        {},
        {
          params: {
            username,
            email,
            name,
            phone,
            password,
          },
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      toast.success('Registration Successfull')
    },
    onError: (error) => {
      console.log(error.response.data.message)
      toast.error(error.response.data.message)
    },
  })
  return { data, registerUser, isLoading }
}
export const useForgotPassword = () => {
  const queryClient = useQueryClient()
  const {
    data,
    mutate: forgotPassword,
    isError,
  } = useMutation({
    mutationFn: ({ email }) =>
      customFetch.post(
        `customer/forgot-password?username=${email}`,
        {},
        {
          params: {
            email,
          },
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      console.log(data)
      alert(data)
    },
    onError: (error) => {
      console.log(error.response.data.message)
      alert(error.response.data.message)
    },
  })
  return { data, forgotPassword, isError }
}
export const useResetPassword = () => {
  const queryClient = useQueryClient()
  const {
    data,
    mutate: resetPassword,
    isError,
  } = useMutation({
    mutationFn: ({ password }) =>
      customFetch.post(
        `customer/reset-password?password=${password}&password_confirmation=${password}`,
        {},
        {
          params: {
            passoword: password,
          },
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      console.log(data)
      alert(data.data.message)
    },
    onError: (error) => {
      console.log(error.response.data.message)
      alert(error.response.data.message)
    },
  })
  return { data, resetPassword, isError }
}

export const useOtpCode = () => {
  let { otp } = useSelector((store) => store.user)
  if (otp === NaN || null) return

  const queryClient = useQueryClient()
  const {
    data,
    mutate: otpCode,
    status,
    isSuccess,
  } = useMutation({
    mutationFn: ({ otpCode }) =>
      customFetch.post(
        `customer/verify-code?code=${otp}`,
        {},
        {
          params: {
            code: otpCode,
          },
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      addUserToLocalStorage(data.data.data)
    },
    onError: (error) => {
      console.log(error.response.data)
      alert(error.response.data.message)
      return
    },
  })

  return { data, otpCode, status }
}
export const useUserLogin = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const {
    data,
    mutate: userLogin,
    status,
  } = useMutation({
    mutationFn: ({ username, password }) =>
      customFetch.post(
        `customer/login?username=${username}&password=${password}&device_name=192.168.0.157`,
        {},
        {
          params: {
            username,
            password,
          },
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      console.log(data.data)
      dispatch(loginUser(data.data.data))
      addUserToLocalStorage(data.data.data)
      toast.success('Welcome Back')
    },
    onError: (error) => {
      console.log(error.response.data.message)
      toast.error('User not found or invalid credentials')
      dispatch(openLoginModal())
      return
    },
  })
  return { data, userLogin, status }
}
