import axios from 'axios'

const http = axios.create({
  timeout: 15000,
  // 允许携带cookie
  withCredentials: false
})


http.interceptors.request.use(
  config => {
    config.customParams = 'aaa'
    console.log('config', config)
    return config
  },
  error => Promise.reject(error)
)

http.interceptors.response.use(
  res => {
    console.log('res', res)
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default http
