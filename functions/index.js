const admin = require('firebase-admin')
const functions = require('firebase-functions')

admin.initializeApp(functions.config().firebase)
let db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const pairOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const createPairCode = event => {
  let pairCode = ''

  for (let i = 0; i < 6; i++)
    pairCode += pairOptions.charAt(Math.floor(Math.random() * pairOptions.length))

  console.info('Pair code: ', pairCode)

  return db.collection('pairCodes').doc(pairCode).get()
    .then(doc => {
      if (doc.exists) {
        return createPairCode(event)
      } else {
        return db.collection('pairCodes').doc(pairCode).set({ time: new Date, uid: event.params.userId }).then(
          doc => {
            return event.data.ref.update({ pairCode, doPair: admin.firestore.FieldValue.delete() })
          }
        )
      }
    }).catch(err => {
      return err
  })
}


exports.createUser = functions.firestore
  .document('users/{userId}')
  .onCreate(event => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    console.info('Create user')
    return createPairCode(event)
  });


exports.updateUser = functions.firestore
  .document('users/{userId}')
  .onUpdate(event => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    let newData = event.data.data()
    let oldData = event.data.previous.data()

    if (newData.doPair && !oldData.doPair) {
      console.info('Update user')
      return createPairCode(event)
    } else {
      console.info('No update user')
      return Promise.resolve()
    }
  });
