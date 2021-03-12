import axios from '../plugins/axios'
const category = 'wordpress'
const buckedPrefix = 'https://bucket.services.builderall.com/notification'
const apiPrefix = '/notifications'

export const index = (owner) => {
  return axios.get(`${buckedPrefix}/filter`, {
    params: {
      owner: owner,
      category: category
    }
  })
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
