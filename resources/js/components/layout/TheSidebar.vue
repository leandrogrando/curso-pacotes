<template>
  <bui-sidebar
    :sidebar-state="sidebarState"
    :active-menu="$page.props.route"
    :menus="menus"
    :menus-bottom="menus_bottom"
    :user="$page.props.user"
  />
</template>

<script>
export default {
  props: {
    sidebarState: {
      type: String,
      default: 'expanded'
    }
  },

  data () {
    return {
      menus: [
        {
          title: 'Início',
          routes: ['home'],
          icon: 'dashboard',
          inertia: this.route('home')
        },
      ],
      menus_bottom: [
        {
          title: 'Backoffice',
          name: 'backoffice',
          icon: 'logo',
          href: 'https://office.builderall.com/br/office',
          target: '_blank'
        }
      ]
    }
  }
}
</script>
