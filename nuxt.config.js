module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'DrinkLink',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Drink Link' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//cdn.materialdesignicons.com/2.1.19/css/materialdesignicons.min.css' }
    ],
    script: [
      { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBWtPLCK01ruUB7l3lTDctRjJyT6APntgI&libraries=places' },
      { src: 'https://www.gstatic.com/firebasejs/4.9.0/firebase-app.js' },
      { src: 'https://www.gstatic.com/firebasejs/4.9.0/firebase-auth.js' },
      { src: 'https://www.gstatic.com/firebasejs/4.9.0/firebase-firestore.js' },
      { innerHTML: `
          var config = {
            apiKey: "AIzaSyBWtPLCK01ruUB7l3lTDctRjJyT6APntgI",
            authDomain: "drink-link.firebaseapp.com",
            databaseURL: "https://drink-link.firebaseio.com",
            projectId: "drink-link",
            storageBucket: "drink-link.appspot.com",
            messagingSenderId: "646223099048"
          };
          firebase.initializeApp(config);`
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fafafa' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
