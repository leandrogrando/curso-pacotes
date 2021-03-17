import axios from '../plugins/axios'
const apiPrefix = '/notifications'

export const index = () => {
   return axios.get(`${apiPrefix}/index`)
}

export const hasUnreadNotifications = () => {
  return axios.get(`${apiPrefix}/count`)
}

export const markAsRead = (notification) => {
  return axios.get(`${apiPrefix}/mark-as-read/${notification._id}`)
}

export const markAllAsRead = () => {
  return axios.get(`${apiPrefix}/read-all/`)
}
