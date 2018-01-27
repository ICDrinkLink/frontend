importScripts("https://www.gstatic.com/firebasejs/4.9.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.9.0/firebase-auth.js");
importScripts("https://www.gstatic.com/firebasejs/4.9.0/firebase-firestore.js");

const config = {
  apiKey: "AIzaSyBWtPLCK01ruUB7l3lTDctRjJyT6APntgI",
  authDomain: "drink-link.firebaseapp.com",
  databaseURL: "https://drink-link.firebaseio.com",
  projectId: "drink-link",
  storageBucket: "drink-link.appspot.com",
  messagingSenderId: "646223099048"
};
firebase.initializeApp(config);

let db = firebase.firestore();
let uid = null;

firebase.auth().signInAnonymously()
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user)
    uid = user.uid
  } else {
    uid = null
  }
})

setInterval(() => {
  console.log('Interval')
  postMessage('pos')
}, 5000)

self.addEventListener('message', event => {
  let message = event.data
  switch (message.action) {
    case 'start':
      setInterval(() => {
        navigator.geolocation.getCurrentPosition(position => {
          date = new Date
          console.log(`Got location ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
          let myPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          postMessage({ action: 'pos', pos: myPos })
        })
      }, 5000)
  }
});
