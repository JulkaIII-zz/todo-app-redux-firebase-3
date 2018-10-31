import firebase from "@firebase/app";
import "@firebase/database";
import "@firebase/auth";

const FirebaseConfig = {
  apiKey: "AIzaSyCFkWg6cNufaCJot_pA11T9M-JYyHj1ksQ",
  authDomain: "todos-ec8f5.firebaseapp.com",
  databaseURL: "https://todos-ec8f5.firebaseio.com",
  projectId: "todos-ec8f5",
  storageBucket: "todos-ec8f5.appspot.com",
  messagingSenderId: "264508941802"
};
const fire = firebase.initializeApp(FirebaseConfig);
export default fire;

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
