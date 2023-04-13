import store from '../store'

export default async (to, from, next) => {

  if (!store.getters['auth/check']) {
    localStorage.setItem('intended_url', to.path)

    next({ name: 'login' })
  } else {
    next()
  }
}