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
    queryKey: ['comment'],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `customer/items/get-single-item?item_id=${id}`
      )
      return data
    },
  })
  return { isLoading, isError, data }
}
export const useFetchAllComments = (id) => {
  const {
    isLoading: loadingComments,
    data: comments,
    isError: errorLoadingComments,
  } = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const { data } = await customFetch.get(
        `customer/comments/by-item?item_id=${id}`
      )
      return data
    },
  })
  return { loadingComments, errorLoadingComments, comments }
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

export const useComment = (id) => {
  const queryClient = useQueryClient()
  const { mutate: userComment, status } = useMutation({
    mutationFn: ({ item_id, msg, date }) =>
      customFetch.post(`customer/comments/comment-on-item`, {
        item_id,
        msg,
        date,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['comment'] })
      console.log(data.data.data.message)
      toast.success(data.data.data.message)
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
    },
  })
  return { userComment, status }
}
export const useReplyComment = () => {
  const queryClient = useQueryClient()
  const { mutate: userReplyComment, status } = useMutation({
    mutationFn: ({ item_id, msg, date }) =>
      customFetch.post(`customer/comments/reply-comment`, {
        item_id,
        msg,
        date,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['comment'] })
      console.log(data.data.data.message)
      toast.success(data.data.data.message)
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
    },
  })
  return { userReplyComment, status }
}

export const useSubmitForReview = () => {
  const queryClient = useQueryClient()
  const { mutate: submitForReview, status } = useMutation({
    mutationFn: ({
      images,
      index_image,
      title,
      description,
      category_id,
      brand,
      size,
      tag_image,
      price,
      location,
      state,
      delivery_mode,
      inStock,
    }) =>
      customFetch.post(`customer/items/submit`, {
        images,
        index_image,
        title,
        description,
        category_id,
        brand,
        size,
        tag_image,
        price,
        location,
        state,
        delivery_mode,
        inStock,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [''] })
      console.log(data)
      toast.success('successfull')
    },
    onError: (error) => {
      console.log(error)
      toast.error('error')
    },
  })
  return { submitForReview, status }
}

// upload items
export const useUploadItem1 = () => {
  const queryClient = useQueryClient()
  const {
    data: item1,
    mutate: uploadItem1,
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
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { uploadItem1, status, item1 }
}
export const useUploadItem2 = () => {
  const queryClient = useQueryClient()
  const {
    data: item2,
    mutate: uploadItem2,
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
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { uploadItem2, status, item2 }
}
export const useUploadItem3 = () => {
  const queryClient = useQueryClient()
  const {
    data: item3,
    mutate: uploadItem3,
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
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { uploadItem3, status, item3 }
}
export const useUploadItem4 = () => {
  const queryClient = useQueryClient()
  const {
    data: item4,
    mutate: uploadItem4,
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
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { uploadItem4, status, item4 }
}
export const useUploadItem5 = () => {
  const queryClient = useQueryClient()
  const {
    data: item5,
    mutate: uploadItem5,
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
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return { uploadItem5, status, item5 }
}
