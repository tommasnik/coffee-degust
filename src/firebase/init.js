import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyDr1ypzFs3pPaEC6gicw5FukqK7w518Uks',
  authDomain: 'coffee-degust.firebaseapp.com',
  databaseURL: 'https://coffee-degust.firebaseio.com',
  projectId: 'coffee-degust',
  storageBucket: 'coffee-degust.appspot.com',
  messagingSenderId: '844494990142',
  appId: '1:844494990142:web:5ac2552c4c6096a51f9a6f',
  measurementId: 'G-ED9L682M1W'
}

firebase.initializeApp(config)
