// imports
import axios from 'axios'

// base url
const baseURL = import.meta.env.VITE_APP_BASE_URL

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
})

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('access_token')

  if (token)
    request.headers.common.Authorization = `Bearer ${token}`

  return request
})

export default api
