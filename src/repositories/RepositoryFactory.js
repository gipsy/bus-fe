import TripRepository from './TripRepository'

const repositories = {
  trips: TripRepository
}
export default {
  get: name => repositories[name]
}
