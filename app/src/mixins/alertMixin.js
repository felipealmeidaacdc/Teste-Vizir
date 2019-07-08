export const alertMixin = {
  methods: {
    fecharAlerta () {
      this.$store.commit('set', {
        item: 'alerta',
        data: {
          boolean: false,
          tipo: '',
          mensagem: ''
        }
      })
    }
  },
  computed: {
    alerta: {
      get () {
        return this.$store.state.alerta
      },
      set (newValue) {
        this.$store.commit('setAlert', {
          boolean: newValue
        })
      }
    }
  }
}
