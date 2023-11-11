import axios from 'axios'
// import { getUserFromLocalStorage } from './localstorage'
import { getUserFromLocalStorage } from './localStorage'
const customFetch = axios.create({
  baseURL: 'https://igeecloset.mukeey.online/api',
})

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage()
  if (user) {
    config.headers['Authorization'] = `Bearer ${user.token}`
  }
  return config
})

export default customFetch
