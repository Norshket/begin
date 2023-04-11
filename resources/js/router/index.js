import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'

const globalMiddleware = ['locale']


function create() {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(beforeEach)
  return router
}


/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach(to, from, next) {
  return next()
}

export default create()