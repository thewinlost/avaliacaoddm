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

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA2o0GgUNKpaMBkI_PgJszb1gKrl1oyaW4",

  authDomain: "avaliacaoddm1.firebaseapp.com",

  projectId: "avaliacaoddm1",

  storageBucket: "avaliacaoddm1.appspot.com",

  messagingSenderId: "931354585405",

  appId: "1:931354585405:web:80f1ab6d41c1f7d60f7d54",
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
