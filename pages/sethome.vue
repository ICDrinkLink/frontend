<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <div class="content">
            <p class="has-text-centered">Your home location has not been set. Please enter your home below.</p>
          </div>
          <div class="field">
            <input @input="canSave = false" title="Search" name="search" id="search" class="input is-medium" v-show="setup">
          </div>

          <img v-if="imageURL" :src="imageURL">

          <button @click="save" class="button save is-primary" :disabled="!canSave">Set Location As Home</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      setup: false,
      autocomplete: null,
      imageURL: null,
      canSave: false,
      lat: null,
      lng: null
    }
  },
  mounted () {
    let input = document.getElementById('search')

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        let circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        })
        this.autocomplete.setBounds(circle.getBounds())
      })
    }

    this.autocomplete = new google.maps.places.Autocomplete(input, {})
    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace()
      if (place.geometry) {
        this.imageURL = null
        this.lat = place.geometry.location.lat()
        this.lng = place.geometry.location.lng()
        this.imageURL = `https://maps.googleapis.com/maps/api/staticmap?center=${this.lat},${this.lng}&zoom=15&scale=2&size=640x480&markers=${this.lat},${this.lng}&key=AIzaSyBWtPLCK01ruUB7l3lTDctRjJyT6APntgI&format=jpg`
        this.canSave = true
      }
    })
    this.setup = true
  },
  methods: {
    save () {
      this.$store.commit('setHomePos', { lat: this.lat, lng: this.lng })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button.save {
    margin: 1rem auto;
    display: block;
  }
</style>
