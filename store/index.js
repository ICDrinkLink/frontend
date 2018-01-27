import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      lat: parseInt(localStorage.getItem('lat')) || null,
      lng: parseInt(localStorage.getItem('lng')) || null
    },
    mutations: {
      setLoc (state, { lat, lng }) {
        console.log(lat, lng)
        state.lat = lat
        state.lng = lng
        localStorage.setItem('lat', lat)
        localStorage.setItem('lng', lng)
      }
    },
    getters: {
      loc: state => {
        return state.lat === null ? null : { lat: state.lat, lng: state.lng }
      }
    }
  })
}

export default createStore
