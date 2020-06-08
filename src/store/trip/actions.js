import Repository from 'src/repositories/RepositoryFactory'
const TripRepository = Repository.get('trips')

export async function getTrips ({ commit }) {
  commit('SET_TRIPS', await TripRepository.get())
}
