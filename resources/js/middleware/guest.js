import store from '../store'

export default (to, from, next) => {

  if (store.getters['auth/check']) {
    next({ name: store.getters['auth/role']('admin') ? 'users.index' : 'orders.index' })
  } else {
    next()
  }
}
