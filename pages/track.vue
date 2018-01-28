<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <h3 class="title is-3">Link Account</h3>
          <p class="content">Enter the Pair Code of a friend's device to receive access to their location data.</p>

          <div class="field">
            <input title="Pair Code" name="pairCode" id="pairCode" class="input is-large" v-model="code">
          </div>

          <button v-if="!uid" :class="{ 'is-loading': loading }" @click="pair" class="button save is-primary">Begin Tracking</button>

          <img v-if="imageURL" :src="imageURL">

          <button v-if="uid" @click="unpair" class="button save is-primary">Stop Tracking</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  let db = firebase.firestore()

  export default {
    data () {
      return {
        code: null,
        loading: false,
        uid: null,
        snapshot: null,
        pos: null
      }
    },
    computed: {
      imageURL () {
        if (this.pos) {
          return `https://maps.googleapis.com/maps/api/staticmap?center=${this.pos.lat},${this.pos.lng}&zoom=17&scale=2&size=640x480&markers=${this.pos.lat},${this.pos.lng}&key=AIzaSyBWtPLCK01ruUB7l3lTDctRjJyT6APntgI&format=jpg`
        } else {
          return null
        }
      }
    },
    methods: {
      pair () {
        this.loading = true
        db.collection('pairCodes').doc(this.code).get().then(
          doc => {
            if (doc.exists) {
              console.log('Valid code')
              let data = doc.data()
              this.uid = data.uid
              this.snapshot = db.collection('users').doc(this.uid).onSnapshot(
                doc => {
                  let data = doc.data()
                  console.log(data)
                  if (data.lastPos && data.lastPos.latitude && data.lastPos.longitude) {
                    this.pos = { lat: data.lastPos.latitude, lng: data.lastPos.longitude }
                  } else {
                    this.pos = null
                  }
                }
              )
            } else {
              console.log('Invalid code')
            }
            this.loading = false
          }
        )
      },
      unpair () {
        this.uid = null
        if (this.snapshot) {
          this.snapshot()
        }
        this.snapshot = null
        this.pos = null
      }
    }
  }
</script>

<style scoped>
  .button {
    font-size: 1.5rem;
    width: 100%;
    margin: 1rem 0;
  }
</style>
