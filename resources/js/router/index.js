import { createRouter, createWebHistory } from 'vue-router'
import routes from './router'

// The middleware for every page of the application.
const globalMiddleware = ['locale']

// Load middleware modules dynamically.
const routeMiddleware = resolveMiddleware(
  require.context('../middleware', false, /.*\.js$/)
)

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

  const middleware = getMiddleware(to)

  callMiddleware(middleware, to, from, (...args) => {
    next(...args)
  })
}


function callMiddleware(middleware, to, from, next) {

  const stack = middleware.reverse() 

  const _next = (...args) => {
    // Stop if "_next" was called with an argument or the stack is empty.
    if (args.length > 0 || stack.length === 0) {
      if (args.length > 0) {
        router.app.$loading.finish()
      }
      return next(...args)
    }

    const { middleware, params } = parseMiddleware(stack.pop())

    if (typeof middleware === 'function') {
      middleware(to, from, _next, params)
    } else if (routeMiddleware[middleware]) {
      routeMiddleware[middleware](to, from, _next, params)
    } else {
      throw Error(`Undefined middleware [${middleware}]`)
    }
  }

  _next()
}

/**
 * @param  {String|Function} middleware
 * @return {Object}
 */
function parseMiddleware(middleware) {
  if (typeof middleware === 'function') {
    return { middleware }
  }

  const [name, params] = middleware.split(':')

  return { middleware: name, params }
}

function resolveMiddleware(requireContext) {
  return requireContext.keys()
    .map(file => [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)])
    .reduce((guards, [name, guard]) => ({ ...guards, [name]: guard.default }), {})
}

/**
 * @param {Route} to
*/
function getMiddleware(to){

  return to.matched.reduce((middleware, route) => {
    if (route.meta.middleware) {
      middleware.push(...route.meta.middleware)
    }
    return middleware
  }, [...globalMiddleware])
}


export default create()