import firebase from "@firebase/app";
import "@firebase/database";
import "@firebase/auth";
import { FirebaseConfig } from "./keys.js";

const fire = firebase.initializeApp(FirebaseConfig);
export default fire;

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
