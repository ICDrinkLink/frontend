<template>
  <section class="section">
    <div class="container">
      <div class="main">
        <div class="main-buttons">
          <button class="button is-outlined is-primary">Estimate Intake</button>
          <button class="button is-outlined is-primary">Track Location</button>
          <button class="button is-outlined is-primary">Sober Friend</button>
          <nuxt-link to="sethome" class="button is-outlined is-primary">Set Home</nuxt-link>
          <nuxt-link to="gohome" :disabled="!loc" class="button is-outlined is-primary">Take Me Home</nuxt-link>
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
        'loc': 'loc'
      })
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
