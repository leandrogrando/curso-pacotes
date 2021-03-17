<template>
  <bui-notifications
    :notifications="notifications"
    label-notifications="Notificações"
    label-empty="Tem nada aqui!"
    label-read-all="Ler tudo"
    label-view-all="Ver tudo"
    :loading="loading"
    @shown="onShown"
    @read="onRead"
    @readAll="onReadAll"
  >
    <template #notification-date="{ date }">
      {{ formatDateFn(date) }}
    </template>
  </bui-notifications>
</template>

<script>

import { index, markAllAsRead, markAsRead } from '../../services/notifications'
import { verifyUnreadNotifications, removeNotificationBadge } from '../../utils/notifications'
import { has } from 'lodash'

export default {
  data () {
    return {
      notifications: [],
      loading: false
    }
  },

  mounted () {
    verifyUnreadNotifications()
  },

  methods: {

    onReadAll () {
      markAllAsRead().then(res => {
        removeNotificationBadge()
      })
    },

    async onRead (notification) {
      if (!notification.read) {
        await markAsRead(notification)
      }
      if (has(notification, 'action')) {
        location.href = notification.action
      }
    },

    onShown () {
      this.loading = true
      const vm = this
      index(this.$page.props.user.hash).then(res => {
        var notifications = res.data
        for (var k in notifications) {
            notifications[k].createdAt = this.$moment().format()
        }
        console.log(notifications);
        vm.notifications = notifications
        vm.loading = false
      })
    },

    formatDateFn (date) {
      try {
        return new Intl.DateTimeFormat(this.$page.props.user.lang).format(new Date(date))
      } catch (error) {
        return new Intl.DateTimeFormat('en-US').format(new Date(date))
      }
    }
  }
}
</script>
