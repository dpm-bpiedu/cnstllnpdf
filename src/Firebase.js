import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

  const config = {
    apiKey: "AIzaSyDKgVA0ix-K1qs08Lca0T0f4YiWMp5oaT8",
    authDomain: "cnstllnpdf.firebaseapp.com",
    databaseURL: "https://cnstllnpdf.firebaseio.com",
    projectId: "cnstllnpdf",
    storageBucket: "cnstllnpdf.appspot.com",
    messagingSenderId: "897910200656"
  };
  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;