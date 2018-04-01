const firebase = require("firebase");
const firebaseui = require('firebaseui');
require("firebase/auth");
require("firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyCFIafbg7AcplyOs-4yMPp2PHSdjI61PCg",
  authDomain: "the-daily-balance.firebaseapp.com",
  databaseURL: "https://the-daily-balance.firebaseio.com",
  projectId: "the-daily-balance",
  storageBucket: "the-daily-balance.appspot.com",
  messagingSenderId: "968548023190"
};

// App - Initialize the firebase app:
firebase.initializeApp(firebaseConfig);
// DB - Initialize Cloud Firestore through Firebase
const db = firebase.firestore();
// UI - Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

export { firebase as default, db, ui };