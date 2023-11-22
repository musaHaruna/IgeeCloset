import { CiUser } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsHandbag } from 'react-icons/bs'
import { BsBank } from 'react-icons/bs'
import { BsShopWindow } from 'react-icons/bs'

const links = [
  { id: 1, text: 'Profile', path: '/user', icon: <CiUser /> },
  {
    id: 2,
    text: 'Notifications',
    path: 'notifications',
    icon: <IoIosNotificationsOutline />,
  },
  { id: 3, text: 'My Purchases', path: 'purchases', icon: <BsHandbag /> },
  {
    id: 4,
    text: 'Bank Info',
    path: 'bank-information',
    icon: <BsBank />,
  },
  { id: 5, text: 'My Offer', path: 'offer', icon: <BsShopWindow /> },
  { id: 6, text: 'My Closet', path: 'closet', icon: <BsShopWindow /> },
]
export default links
