
import { createStore } from 'vuex'


const requireContext = require.context('./modules', false, /.*\.js$/)


const modules = requireContext.keys()
.map(file =>
    [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
  )
  .reduce((modules, [name, module]) => {
    return { ...modules, [name]: module }
  }, {})


export default createStore({
  modules
})