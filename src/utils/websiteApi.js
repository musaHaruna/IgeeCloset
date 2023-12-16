import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import customFetch from './axios'
import { toast } from 'react-toastify'

export const useFetchCategories = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['get-categories'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/get-categories')
      return data.data.data
    },
  })
  return { isLoading, isError, data }
}
export const useFetchCustomersItems = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['get-customers-items'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/items')
      return data.data.data
    },
  })
  return { isLoading, isError, data }
}
export const useFetchAllClosets = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['get-all-closets'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/closets/get-all')
      return data.data.data
    },
  })
  return { isLoading, isError, data }
}
