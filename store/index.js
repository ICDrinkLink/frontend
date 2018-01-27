import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      home: {
        lat: parseFloat(localStorage.getItem('lat')) || null,
        lng: parseFloat(localStorage.getItem('lng')) || null
      },
      my: {
        lat: null,
        lng: null
      },
      hasLocation: false
    },
    actions: {
      init ({ dispatch }) {
        dispatch('getLocation')
      },
      getLocation({ commit, dispatch }) {
        navigator.geolocation.getCurrentPosition(position => {
          let myPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          commit('setMy', myPos)
          setTimeout(() => {
            dispatch('getLocation')
          }, 5000)
        })
      }
    },
    mutations: {
      setHome (state, pos) {
        state.home = pos
        localStorage.setItem('lat', pos.lat)
        localStorage.setItem('lng', pos.lng)
      },
      setMy (state, pos) {
        state.my = pos
        state.hasLocation = true
      }
    },
    getters: {
      getHome: state => {
        return state.home.lat !== null ? state.home : null
      },
      getMy: state => {
        return state.hasLocation ? state.my : null
      }
    }
  })
}

export default createStore
