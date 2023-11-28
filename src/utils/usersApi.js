import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginUser } from '../features/user/userSlice'
import customFetch from './axios'
import { addUserToLocalStorage } from './localStorage'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

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
      console.log(data.data)
    },
    onError: (error) => {
      console.log(error.response.data.message)
    },
  })
  return { data, registerUser, isLoading }
}
export const useForgotPassword = () => {
  const queryClient = useQueryClient()
  const {
    data,
    mutate: forgotPassword,
    isLoading,
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
    },
  })
  return { data, forgotPassword, isLoading }
}
export const useReseytPassword = () => {
  const queryClient = useQueryClient()
  const {
    data,
    mutate: resetPassword,
    isLoading,
  } = useMutation({
    mutationFn: ({ password, password_confirmation }) =>
      customFetch.post(
        `customer/reset-password?password=${password}&password_confirmation=${password_confirmation}`,
        {},
        {
          params: {
            password,
            password_confirmation,
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
      alert(data)
    },
  })
  return { data, resetPassword, isLoading }
}
export const useOtpCode = () => {
  let { otp } = useSelector((store) => store.user)

  const queryClient = useQueryClient()
  const {
    data,
    mutate: otpCode,
    isLoading,
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
    },
  })

  return { data, otpCode, isLoading }
}
export const useUserLogin = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const {
    data,
    mutate: userLogin,
    isLoading,
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
    },
    onError: (error) => {
      console.log(error.response.data.message)
    },
  })
  return { data, userLogin, isLoading }
}
