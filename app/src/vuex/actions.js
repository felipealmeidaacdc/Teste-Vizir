import axios from 'axios'
const URL = 'http://localhost:3000/'

export default {
  set (context, payload) {
    context.commit('setLoader', {
      nome: payload.loading,
      boolean: true
    })
    axios({
      method: 'get',
      url: `${URL}${payload.servico}`,
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      context.commit('set', {
        item: payload.item,
        data: response.data
      })
      context.commit('setLoader', {
        nome: payload.loading,
        boolean: false
      })
    })
  },
  edit (context, payload) {
    context.commit('set', {
      item: 'alerta',
      data: payload.alerta
    })
    axios({
      method: 'put',
      url: `${URL}${payload.servico}`,
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(payload.item)
    }).then(response => {
      context.commit('set', {
        item: 'alerta',
        data: {
          boolean: true,
          tipo: 'success',
          mensagem: 'Editado.'
        }
      })
      context.dispatch('set', {
        servico: payload.servico,
        item: payload.servico,
        loading: payload.loading
      })
    })
  },
  new (context, payload) {
    context.commit('set', {
      item: 'alerta',
      data: payload.alerta
    })
    axios({
      method: 'post',
      url: `${URL}${payload.servico}`,
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(payload.item)
    }).then(response => {
      context.commit('set', {
        item: 'alerta',
        data: {
          boolean: true,
          tipo: 'success',
          mensagem: 'Salvo.'
        }
      })
      context.dispatch('set', {
        servico: payload.servico,
        item: payload.servico,
        loading: payload.loading
      })
    })
  }
}
