import axios from 'axios'
import BaseApi from './baseApi'

class AuthApi extends BaseApi {
  constructor () {
    super()

    // this.url.login = () => `${this.apiUrl}/login`
    this.url = {
      login: () => `${this.apiUrl}/login`,
      logout: () => `${this.appUrl}/logout`,
      register: () => `${this.apiUrl}/register`,
    }
  }

  login (data) {
    return axios.post(this.url.login(), data)
  }

  logout () {
    return axios.post(this.url.logout())
  }

  register () {
    return axios.post(this.url.register())
  }
}

export default AuthApi
