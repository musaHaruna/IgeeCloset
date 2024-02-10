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

export const useFetchAllItemsByClosetId = (id) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['closet-id'],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `customer/closets/get-items-by-closet?closet_id=${id}`
      )
      return data
    },
  })
  return { isLoading, isError, data }
}
export const useFetchAllItemsByCategory = (id) => {
  const {
    isLoading: categoryLoading,
    data: items,
    isError: categoryError,
  } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `customer/items/get-items-by-category?category_id=${id}`
      )
      return data
    },
  })
  return { categoryLoading, categoryError, items }
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

export const useFollowCloset = () => {
  const queryClient = useQueryClient()
  const { mutate: followCloset, status } = useMutation({
    mutationFn: ({ id }) =>
      customFetch.post(
        `customer/follow?customer_id=${id}`,
        {},
        { params: { id } }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['follow'] })
      console.log(data.data.data.message)
      toast.success(data.data.data.message)
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
    },
  })
  return { followCloset, status }
}
export const useUnFollowCloset = () => {
  const queryClient = useQueryClient()
  const { mutate: unfollowCloset, status } = useMutation({
    mutationFn: ({ id }) =>
      customFetch.post(
        `customer/unfollow?customer_id=${id}`,
        {},
        { params: { id } }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['unfollow'] })
      console.log(data.data.data.message)
      toast.success(data.data.data.message)
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
    },
  })
  return { unfollowCloset, status }
}
export const useLikeItem = () => {
  const queryClient = useQueryClient()
  const { mutate: likeItem, status } = useMutation({
    mutationFn: ({ id }) =>
      customFetch.post(`customer/like?item_id=${id}`, {}, { params: { id } }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['likw'] })
      console.log(data.data.data.message)
      toast.success(data.data.data.message)
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
    },
  })
  return { likeItem, status }
}
export const useUnLikeItem = (id) => {
  const queryClient = useQueryClient()
  const { mutate: unLikeItem, status } = useMutation({
    mutationFn: ({ id }) =>
      customFetch.post(
        `customer/unlike?item_id=${id}`,
        {},
        {
          params: {
            id,
          },
        }
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['unlike'] })
      console.log(data.data.data.message)
      toast.success(data.data.data.message)
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
    },
  })
  return { unLikeItem, status }
}
