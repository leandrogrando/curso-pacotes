<template>
    <bui-page
      title="Notificações"
      subtitle="Nova notificaçõa"
    >
      <form @submit.prevent="submit()">
        <bui-form-group
          label="Título"
          :required="true"
          :error="form.errors.title"
        >
          <b-form-input
            v-model="form.title"
            type="text"
          />
        </bui-form-group>

        <bui-form-group
          label="Mensagem"
          :required="true"
          :error="form.errors.message"
        >
          <b-form-input
            v-model="form.message"
            type="text"
          />
        </bui-form-group>

        <bui-form-group
          label="Action"
          :required="true"
          :error="form.errors.action"
        >
          <b-form-input
            v-model="form.action"
            type="url"
          />
        </bui-form-group>

        <bui-form-group
          label="User"
          :required="true"
          :error="form.errors.user_id"
        >
          <b-form-select
            v-model="form.user_id"
            :options="computedUsers"
          />
        </bui-form-group>

        <b-button
          type="submit"
          variant="primary"
          :disabled="form.processing"
        >
          Enviar
        </b-button>
      </form>
    </bui-page>
</template>

<script>
export default {
 data () {
    return {
      original_plan: null,
      form: this.$inertia.form({
        user_id: null,
        title: '',
        message: '',
        action: '',
      })
    }
  },
props: ['users'],
methods: {
  submit () {
      this.form.post('/notifications');
      this.form.reset();
  }
},

  computed: {
    computedUsers: function () {
      const list = []

      for (const k in this.users) {
        list.push({
          value: this.users[k].id,
          text: this.users[k].name
        })
      }

      return list
    },

}
}
</script>

<style>

</style>
