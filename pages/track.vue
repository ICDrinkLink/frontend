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

          <button @click="pair" class="button save is-primary">Begin Tracking</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: null
      }
    },
    methods: {
      pair () {

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
