// import * as firebase from "firebase";
import firebase from "@firebase/app";
import "@firebase/database";
//import "firebase/firestore"; // Firestore - NoSQL DB

//import { FirebaseConfig } from "../config/keys";
const FirebaseConfig = {
  apiKey: "AIzaSyCFkWg6cNufaCJot_pA11T9M-JYyHj1ksQ",
  authDomain: "todos-ec8f5.firebaseapp.com",
  databaseURL: "https://todos-ec8f5.firebaseio.com",
  projectId: "todos-ec8f5",
  storageBucket: "todos-ec8f5.appspot.com",
  messagingSenderId: "264508941802"
};
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
