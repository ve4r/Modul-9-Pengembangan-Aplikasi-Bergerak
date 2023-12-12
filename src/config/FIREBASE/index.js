import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyAnX-14Xw6m4dN5R6itBYJnWG1anOrxaIY",
    authDomain: "noteapp-9bc90.firebaseapp.com",
    databaseURL: "https://noteapp-9bc90-default-rtdb.firebaseio.com",
    projectId: "noteapp-9bc90",
    storageBucket: "noteapp-9bc90.appspot.com",
    messagingSenderId: "79310578584",
    appId: "1:79310578584:web:5514baba66687cd6c301ed"
  });

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

const FIREBASE = firebase;

export default FIREBASE;