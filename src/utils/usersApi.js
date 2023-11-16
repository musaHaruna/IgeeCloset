import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginUser } from '../features/user/userSlice'
import customFetch from './axios'
import { addUserToLocalStorage } from './localStorage'
import { useDispatch } from 'react-redux'

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
      queryClient.invalidateQueries({ queryKey: ['registerUser'] })
      console.log(data.data)
    },
    onError: (error) => {
      console.log(error.response.data.message)
    },
  })
  return { data, registerUser, isLoading }
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
      queryClient.invalidateQueries({ queryKey: ['userlogin'] })
      addUserToLocalStorage(data.data.data)
      console.log(data.data)
      dispatch(loginUser(data.data.data))
    },
    onError: (error) => {
      console.log(error.response.data.message)
    },
  })
  return { data, userLogin, isLoading }
}
