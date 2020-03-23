import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBPjh2GhOyqzLjWOByLaIPSU3vT21uL-6Q",
    authDomain: "look-n-cook.firebaseapp.com",
    databaseURL: "https://look-n-cook.firebaseio.com",
    projectId: "look-n-cook",
    storageBucket: "look-n-cook.appspot.com",
    messagingSenderId: "432064175798",
    appId: "1:432064175798:web:0ae37330c1a84581ef5017",
    measurementId: "G-GRGQWDJPZ2"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //const analytics = firebase.analytics();

  export default fire;