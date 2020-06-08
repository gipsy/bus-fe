import Client from './Clients/AxiosClient'
const resource = '/trips'

export default {
  get () {
    return Client.get(`${resource}`)
  }

  // MANY OTHER ENDPOINT RELATED STUFFS
}
