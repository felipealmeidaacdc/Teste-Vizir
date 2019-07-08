export default{
  get (state) {
    return param => state[param]
  },
  getDddsDeDestino (state) {
    return param => state.costs.filter(cost => cost.source_code === param)
  }
}
