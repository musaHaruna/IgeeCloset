import React from 'react'
import {
  useFetcSingleItem,
  useFetchAllCloset,
  useFetchAllItems,
  useFetchAllItemsByCategory,
  useFetchAllItemsByClosetId,
} from '../utils/websiteApi'

const Error = () => {
  const test2 = useFetchAllCloset()

  console.log(test2)
  return <div>Error</div>
}

export default Error
