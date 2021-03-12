<template>
  <b-nav-item
    class="site-details-nav-item"
    as="inertia-link"
    :active="isActive"
    :class="{ 'opacity-80' : !isActive}"
    @click="navigate(nav)"
  >
    <bui-icon
      class="ml-ltr-2 mr-ltr-3 ml-rtl-3 mr-rtl-2"
      :name="nav.icon.name"
      :height="nav.icon.height"
      :gray="!isActive"
    />
    <span>{{ nav.title }}</span>
  </b-nav-item>
</template>

<script>
export default {
  props: {
    nav: {
      type: Object,
      required: true
    }
  },

  computed: {
    isActive () {
      return this.nav.tab === this.$page.props.tab
    }
  },

  methods: {
    navigate (nav) {
      if (this.isActive) return
      this.$inertia.get(
        this.route('sites.details', {
          id: this.$page.props.siteProp.id,
          tab: nav.tab
        })
      )
    }
  }
}
</script>

<style lang="scss">
.opacity-80 {
  filter: opacity(0.8);
}

.site-details-nav {
  .site-details-nav-item {
    a.nav-link {
      display: flex;
      align-items: center;
      padding: 1.3rem 7px;
      border-bottom: 3px solid transparent;
      min-height: 64px;

      .bui-icon {
        flex-shrink: 0;
      }

      span {
        font: normal normal bold 1rem/19px Muli;
        letter-spacing: 0px;
        color: #3f4040;
      }

      &.active {
        border-color: var(--primary);
        span {
          color: var(--primary);
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .site-details-nav {
    .site-details-nav-item {
      background: #fff;
      box-shadow: 0px 1px 2px #00000029;
      border-radius: 3px;
      margin-bottom: 18px;
      a.nav-link {
        border-left: 3px solid #fff;
        border-bottom: none;
        &.active {
          box-shadow: 0px 1px 2px #00000029;

        }
      }
    }
  }
}
</style>
