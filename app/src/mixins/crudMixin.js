export const crudMixin = {
  methods: {
    editItem (item, array) {
      console.log('Edit')
      this.editedIndex = this[array].indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    save (servico, item, loading) {
      console.log('Save')
      if (this.editedIndex > -1) {
        console.log('Edit')
        this.$store.dispatch('edit', {
          servico,
          item,
          loading,
          alerta: {
            tipo: 'info',
            mensagem: 'Editando',
            boolean: true
          }
        })
      } else {
        if (this.$refs.form.validate()) {
          this.$store.dispatch('new', {
            servico,
            item,
            loading,
            alerta: {
              tipo: 'info',
              mensagem: 'Salvando',
              boolean: true
            }
          })
        }
      }
      this.close()
    },
    close () {
      console.log('Close')
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
        this.$refs.form.resetValidation()
      }, 300)
    }
  },
  data () {
    return {
      testMixin: 'testMixin'
    }
  }
}
