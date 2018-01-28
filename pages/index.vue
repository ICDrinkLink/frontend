<template>
  <section class="section">
    <div class="container">
      <div class="main">
        <div class="main-buttons">
          <button class="button is-outlined is-primary">Estimate Intake</button>
          <nuxt-link to="app" class="button is-outlined is-primary">Track Location</nuxt-link>
          <nuxt-link to="track" class="button is-outlined is-primary">Sober Friend</nuxt-link>
          <nuxt-link to="sethome" class="button is-outlined is-primary">Set Home</nuxt-link>
          <button @click="goHome" :disabled="!(homePos && myPos)" class="button is-outlined is-primary">Take Me Home</button>
          <nuxt-link to="twitter" class="button is-outlined is-primary">Twitter Bot</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        homePos: 'getHome',
        myPos: 'getMy'
      })
    },
    methods: {
      goHome () {
        window.open(`https://www.google.com/maps/dir/${this.myPos.lat},${this.myPos.lng}/${this.homePos.lat},${this.homePos.lng}/`)
      }
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    justify-content: center;
  }

  .main-buttons {
    display: flex;
    flex-direction: column;
  }

  .button {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  a[disabled] {
    pointer-events: none;
  }

  @media screen and (min-width: 500px) {
    .button {
      font-size: 2rem;
    }
  }
</style>
