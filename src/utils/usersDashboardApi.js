import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import customFetch from './axios'
import { toast } from 'react-toastify'
export const useFetchProfile = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/profile')
      return data
    },
  })
  return { isLoading, isError, data }
}

export const useUpdateProfile = () => {
  const queryClient = useQueryClient()
  const { mutate, status, data } = useMutation({
    mutationFn: ({ username, phoneNumber, address, state, bio }) =>
      customFetch.post('customer/profile/update', {
        name: username,
        phone: phoneNumber,
        address,
        state,
        bio,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
      toast.success('Profile updated successfully')
      console.log(data)
    },
    onError: (error) => {
      toast.error('An error occured while updating your profile')
      return error
    },
  })

  return { mutate, status }
}

export const useFetchBankInfo = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['bank-info'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/profile/bank')
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
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
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
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
      toast.success('Image uploaded successfully')
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { updateProfileImage, status }
}
export const useUploadImage = () => {
  const queryClient = useQueryClient()
  const {
    data,
    mutate: uploadImage,
    status,
  } = useMutation({
    mutationFn: ({ formData }) =>
      customFetch.post('customer/items/upload-image', formData, {
        headers: {
          'Custom-Headers': 'value',
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] })
      toast.success('Image uploaded successfully')
      console.log(data)
      return data
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { uploadImage, status, data }
}

export const useFetchUsersClosetInfo = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['get-users-closet-info'],
    queryFn: async () => {
      const { data } = await customFetch.get(
        'customer/closets/get-user-closet-info'
      )
      return data.data.data
    },
  })
  return { isLoading, isError, data }
}
