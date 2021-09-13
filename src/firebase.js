
// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyBNSSq9M8ykdxHRUkb0mEa8OEqiLDAjLdg",
//   authDomain: "clone-98dbc.firebaseapp.com",
//   projectId: "clone-98dbc",
//   storageBucket: "clone-98dbc.appspot.com",
//   messagingSenderId: "716763877307",
//   appId: "1:716763877307:web:38a880f4f37912e2ac3e9e",
//   measurementId: "G-NLF9B813SV"
// };

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBNSSq9M8ykdxHRUkb0mEa8OEqiLDAjLdg",
  authDomain: "clone-98dbc.firebaseapp.com",
  projectId: "clone-98dbc",
  storageBucket: "clone-98dbc.appspot.com",
  messagingSenderId: "716763877307",
  appId: "1:716763877307:web:38a880f4f37912e2ac3e9e",
  measurementId: "G-NLF9B813SV"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();


export { db, auth };

