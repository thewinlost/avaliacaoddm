// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBH05hgIGZE5BKLr8n7fe4GAnOM9PydyfA",

  authDomain: "pretcheemprega.firebaseapp.com",

  projectId: "pretcheemprega",

  storageBucket: "pretcheemprega.appspot.com",

  messagingSenderId: "792768294131",

  appId: "1:792768294131:web:3efcbc3ad1d9ec5ef29b86",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore };
