import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plans: [],
    loadingPlanos: false,
    costs: [
      {
        id: 1,
        source_code: '011',
        target_souce: '012',
        value: 1.90
      },
      {
        id: 2,
        source_code: '011',
        target_souce: '012',
        value: 1.90
      },
      {
        id: 3,
        source_code: '011',
        target_souce: '012',
        value: 1.90
      }
    ],
    loadingDdds: false,
    alerta: {
      tipo: '',
      boolean: false,
      mensagem: ''
    }
  },
  getters,
  mutations,
  actions
})
