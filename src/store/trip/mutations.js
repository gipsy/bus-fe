export function SET_TRIPS (state, { data }) {
  state.data = data
  state.cache = true
}
