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

export const useFetchAllCloset = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['get-all-closets'],
    queryFn: async () => {
      const { data } = await customFetch.get('customer/closets/get-all')
      return data
    },
  })
  return { isLoading, isError, data }
}

export const useFetchAllItems = (id) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const { data } = await customFetch.get(`customer/items?page=${id}`)
      return data
    },
  })
  return { isLoading, isError, data }
}

export const useFetchAllItemsByCloset = (id) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `customer/closets/get-items-by-closet?closet_id=${id}`
      )
      return data.data.data
    },
  })
  return { isLoading, isError, data }
}
export const useFetchAllItemsByCategory = (id) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `customer/items/get-items-by-category?category_id=${id}`
      )
      return data.data.data
    },
  })
  return { isLoading, isError, data }
}

export const useFetcSingleItem = (id) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `customer/items/get-single-item?item_id=${id}`
      )
      return data.data.data
    },
  })
  return { isLoading, isError, data }
}
