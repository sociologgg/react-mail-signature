// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5lZfGHr16XtBu6121-3nnNYOgiXPy0Eo",
  authDomain: "mail-signature-c886b.firebaseapp.com",
  projectId: "mail-signature-c886b",
  storageBucket: "mail-signature-c886b.appspot.com",
  messagingSenderId: "839641907466",
  appId: "1:839641907466:web:87a18ff260e1a5deb73af3",
  measurementId: "G-56F953VDL4",
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore();
