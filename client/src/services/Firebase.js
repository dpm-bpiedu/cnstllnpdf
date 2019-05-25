import firebase from 'firebase/app';
//import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDKgVA0ix-K1qs08Lca0T0f4YiWMp5oaT8",
  authDomain: "cnstllnpdf.firebaseapp.com",
  databaseURL: "https://cnstllnpdf.firebaseio.com",
  projectId: "cnstllnpdf",
  storageBucket: "cnstllnpdf.appspot.com",
  messagingSenderId: "897910200656",
  appId: "1:897910200656:web:f2084d9b65434953"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth().app;

export default firebase;
