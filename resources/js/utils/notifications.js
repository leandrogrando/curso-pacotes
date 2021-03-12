import { hasUnreadNotifications } from '../services/notifications'

const bellEl = '.navbar-notifications-bell'

const removeNotificationBadge = () => document.querySelector(bellEl).classList.remove('new')

const addNotificationBadge = () => document.querySelector(bellEl).classList.add('new')

const verifyUnreadNotifications = function () {
  hasUnreadNotifications().then(response => {
    if (response.data > 0) {
      addNotificationBadge()
    } else {
      removeNotificationBadge()
    }
  })
}

export {
  removeNotificationBadge,
  addNotificationBadge,
  verifyUnreadNotifications
}
