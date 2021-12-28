// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0mAcsQjYXeTyRPQxPmFkCpm6mqKXKB-4",
  authDomain: "crud-react-ae773.firebaseapp.com",
  projectId: "crud-react-ae773",
  storageBucket: "crud-react-ae773.appspot.com",
  messagingSenderId: "982763276246",
  appId: "1:982763276246:web:74a3e55dbd04186e114677",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
