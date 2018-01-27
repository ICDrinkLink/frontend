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
      hasLocation: false,
      uid: null
    },
    actions: {
      init ({ commit }) {
        firebase.auth().signInAnonymously()
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log(user)
            commit('setUid', user.uid)
          } else {
            commit('setUid', null)
          }
        })

        navigator.geolocation.watchPosition(position => {
          // date = new Date
          // console.log(`Got location ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
          let myPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          commit('setMyPos', myPos)
        });
      }
    },
    mutations: {
      setHomePos (state, pos) {
        state.home = pos
        localStorage.setItem('lat', pos.lat)
        localStorage.setItem('lng', pos.lng)
      },
      setMyPos (state, pos) {
        state.my = pos
        state.hasLocation = true
      },
      setUid (state, uid) {
        state.uid = uid
      }
    },
    getters: {
      getHome: state => {
        return state.home.lat !== null ? state.home : null
      },
      getMy: state => {
        return state.hasLocation ? state.my : null
      },
      getUid: state => state.uid
    }
  })
}

export default createStore
