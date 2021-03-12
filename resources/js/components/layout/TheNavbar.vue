<template>
  <bui-navbar
    logo="/images/meta/logo.png"
    logo-sm="/images/meta/logo-sm.png"
    label-favorite-lang="Seu idioma"
    label-logout="Sair"
    :home-link="$route('home')"
    :user="$page.props.user"
    :languages="languages"
    :sidebar-state="sidebarState"
    @logout="logout"
    @toggle-sidebar="$emit('toggle-sidebar', $event)"
  >
    <template #items-right>
      <b-button
        v-b-toggle.bui-notifications
        variant="default"
        class="p-2"
      >
        <bui-icon
          class="m-0 navbar-notifications-bell"
          name="bell"
          size="19"
        />
      </b-button>
    </template>
  </bui-navbar>
</template>

<script>

export default {
  props: {
    sidebarState: {
      type: String,
      default: 'expanded'
    }
  },

  data: function () {
    return {
      languages: [
        {key: "pt_BR", desc: "Português (Brasil)"},
      ]
    }
  },

  methods: {
    logout: function () {
      location.href = this.route('login.logout')
    },
  }
}
</script>

<style>
.navbar-notifications-bell {
  position: relative;
}
.navbar-notifications-bell.new::after {
  width: 10px;
  height: 10px;
  content: close-quote;
  background: #ff3636;
  display: block;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  right: 1px;
  top: 1px;
}
</style>
