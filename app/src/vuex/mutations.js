export default {
  set (state, payload) {
    state[payload.item] = payload.data
  },
  setAlert (state, payload) {
    state.alert = payload.boolean
  },
  setLoader (state, payload) {
    state[payload.nome] = payload.boolean
  }
}
