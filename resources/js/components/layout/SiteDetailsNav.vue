<template>
  <div>
    <b-nav class="site-details-nav flex-md-column">
      <site-details-nav-item
        v-for="nav in navs"
        :key="nav.tab"
        :nav="nav"
      />
    </b-nav>
  </div>
</template>

<script>
import SiteDetailsNavItem from './SiteDetailsNavItem'

export default {
  components: {
    SiteDetailsNavItem
  },

  data () {
    return {
      navs: [
        {
          tab: 'manage',
          title: 'Manage',
          icon: {
            name: 'site-mobile',
            height: 21
          }
        },
        {
          tab: 'server-options',
          title: 'Server Options',
          icon: {
            name: 'server-settings'
          }
        },
        {
          tab: 'domain',
          title: 'Domain',
          icon: {
            name: 'globe-gear'
          }
        },
        {
          tab: 'ftp',
          title: 'FTP',
          icon: {
            name: 'file-transfer'
          }
        },
        {
          tab: 'database',
          title: 'Database',
          icon: {
            name: 'database'
          }
        },
        {
          tab: 'backup',
          title: 'Backups',
          icon: {
            name: 'backup',
            height: 16
          }
        }
      ]
    }
  }
}
</script>
