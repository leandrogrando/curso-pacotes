import axios from 'axios'
import NProgress from 'nprogress'

axios.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  NProgress.done()
  return response
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export default axios
