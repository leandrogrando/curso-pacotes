<template>
  <div>
    <main v-if="fullpage">
      <slot />
    </main>

    <template v-else>
      <the-navbar
        :sidebar-state="sidebarState"
        @toggle-sidebar="toggleSidebar"
      />
      <the-sidebar :sidebar-state="sidebarState" />

      <the-notification-center />

      <bui-container :sidebar-state="sidebarState">
        <slot />
      </bui-container>
    </template>
  </div>
</template>

<script>
import TheNavbar from '../components/layout/TheNavbar'
import TheSidebar from '../components/layout/TheSidebar'
import TheNotificationCenter from '../components/layout/TheNotificationCenter'

const sidebarStateKey = 'wp_store_sidebar_state'

export default {
  components: {
    TheNavbar,
    TheSidebar,
    TheNotificationCenter
  },

  props: {
    title: {
      type: String,
      default: 'Builderall WP'
    },
    fullpage: {
      type: Boolean,
      default: false
    },
    forceSidebarState: {
      type: [String, undefined],
      default: undefined
    }
  },

  data: function () {
    return {
      sidebarState: 'expanded'
    }
  },

  watch: {
    title: {
      immediate: true,
      handler (title) {
        document.title = title
      }
    }
  },

  mounted () {
    this.sidebarState =
      this.forceSidebarState ||
      localStorage.getItem(sidebarStateKey) ||
      'expanded'
  },

  methods: {
    toggleSidebar: function (state) {
      if (this.forceSidebarState) return
      this.sidebarState = state
      localStorage.setItem(sidebarStateKey, state)
    }
  }
}
</script>
