import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import customFetch from './axios'

export const useFetchProfile = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/profile')
      return data.data.user
    },
  })
  return { isLoading, isError, data }
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()
  const { mutate, status } = useMutation({
    mutationFn: ({ username, phoneNumber }) =>
      customFetch.post('customer/profile/update', {
        name: username,
        phone: phoneNumber,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
      alert('Success')
    },
    onError: (error) => {
      console.log(error)
      alert('error')
    },
  })
  return { mutate, status }
}

export const useFetchBankInfo = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['bank-info'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/profile/bank')
      alert(data.data)
      console.log(data.data.bank)
      return data.data.bank
    },
  })
  return { isLoading, isError, data }
}

export const useUpdateBankInfo = () => {
  const queryClient = useQueryClient()
  const { mutate: updateBankInfo, status } = useMutation({
    mutationFn: ({ name, account_name, account_number }) =>
      customFetch.post('customer/profile/bank/update', {
        name,
        account_name,
        account_number,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bank-info'] })
      alert('Success')
    },
    onError: (error) => {
      console.log(error)
      alert('error')
    },
  })
  return { updateBankInfo, status }
}
export const useUpdateProfileImage = () => {
  const queryClient = useQueryClient()
  const { mutate: updateProfileImage, status } = useMutation({
    mutationFn: ({ formData }) =>
      customFetch.post('customer/profile/update-image', formData, {
        headers: {
          'Custom-Headers': 'value',
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bank-info'] })
      alert('Success')
    },
    onError: (error) => {
      console.log(error)
      alert('error')
    },
  })
  return { updateProfileImage, status }
}
