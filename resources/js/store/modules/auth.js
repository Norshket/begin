export const state = {
  user: window.config.user,
  key: null
}

// getters
export const getters = {
  user: state => state.user,
  check: state => state.user !== null,
}
