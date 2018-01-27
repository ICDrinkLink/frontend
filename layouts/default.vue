<template>
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <h1 @click="home" class="navbar-item title is-5 is-marginless">DrinkLink</h1>
          <div class="spacer"></div>
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/drinklinkbot" target="_blank">
            <span class="icon">
              <i class="mdi mdi-twitter mdi-24px"></i>
            </span>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="https://twitter.com/drinklinkbot" target="_blank">
              <span class="icon">
                <i class="mdi mdi-twitter mdi-24px"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <nuxt/>
  </div>
</template>

<script>
  export default {
    methods: {
      home () {
        this.$router.push('/')
      }
    },
    mounted () {
      // TODO: Display location data warning first
      this.$store.dispatch('init')
    }
  }
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/initial-variables";
  @import "~bulma/sass/utilities/functions";

  $primary: #673ab7;

  @import "~bulma/sass/utilities/derived-variables";

  @import "~bulma";

  html {
    min-width: initial;
  }

  .spacer {
    flex: 1;
  }

  .navbar-item.title {
    cursor: pointer;
  }
</style>
