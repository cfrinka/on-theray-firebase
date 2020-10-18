import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiZ4m2tC2UGC0MUbC9cMi7awg3SbFnYAA",
    authDomain: "on-therapy.firebaseapp.com",
    databaseURL: "https://on-therapy.firebaseio.com",
    projectId: "on-therapy",
    storageBucket: "on-therapy.appspot.com",
    messagingSenderId: "295798591898",
    appId: "1:295798591898:web:68afe4c19770457fe76a23"
  };
  
  export default firebase.initializeApp(firebaseConfig);