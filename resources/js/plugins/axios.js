import axios from 'axios'

axios.defaults.withCredentials = true

// Request interceptor
axios.interceptors.request.use(request => {
  return request

})

// Response interceptor
axios.interceptors.response.use(response => response, error => {


})