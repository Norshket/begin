import BaseForm from 'vform'
import { serialize } from 'object-to-formdata'

class Form extends BaseForm {
  constructor (data = {}) {
    super(data)
    this.progress = null
  }

  startProcessing () {
    super.startProcessing()
    this.progress = 0
  }

  finishProcessing () {
    super.finishProcessing()
    this.progress = null
  }

  clear () {
    super.clear()
    this.progress = null
  }

  async submit (method, url, config = {}) {
    const newConfig = Object.assign(config, {
      transformRequest: [function (data, headers) {
        return serialize(data, {
          /**
           * include array indices in FormData keys
           * defaults to false
           */
          indices: true,

          /**
           * treat null values like undefined values and ignore them
           * defaults to false
           */
          nullsAsUndefineds: false,

          /**
           * convert true or false to 1 or 0 respectively
           * defaults to false
           */
          booleansAsIntegers: true,

          /**
           * store arrays even if they're empty
           * defaults to false
           */
          allowEmptyArrays: false
        })
      }],
      onUploadProgress: e => {
        this.progress = Math.round((e.loaded * 100) / e.total)
      }
    })
    if (method === 'put') {
      this._method = 'put'
      method = 'post'
    }
    return super.submit(method, url, newConfig)
  }
}

Form.ignore.push('progress')

export default Form
