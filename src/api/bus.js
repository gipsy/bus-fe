import axios from 'axios'

class Bus {
  constructor () {
    // this.config = config

    this.trip = {
      findAll: {
        allTrips: async (parameters) =>
          this.call('/trips', { parameters })
      }
    }

    this.user = {
      register: async data =>
        this.call('/users/create', { method: 'post', data }),
      login: async data =>
        this.call('/users/token/create', { method: 'patch', data }),
      logout: async () =>
        this.call('/users/logout', { method: 'post' }),
      read: async (id, parameters) =>
        this.call(`/users/${id}`, { parameters }),
      update: async (id, data) =>
        this.call(`/users/${id}/update`, { method: 'patch', data }),
      remove: async (id) =>
        this.call(`/users/${id}/remove`, { method: 'delete' })
    }
  }

  async call (path, { method = 'get', data, parameters = {} } = {}) {
    const queryParameters = Object
      .keys(parameters)
      .map(key => `${key}=${encodeURIComponent(parameters[key])}`)
      .join('&')
    const url = `${this.config.basePath}${path}/?${queryParameters}`
    const response = await axios.request(url, { method, data })

    return response.data
  }
}

export default Bus
