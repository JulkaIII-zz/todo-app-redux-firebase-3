import { signUp, signIn, signOut } from "../../src/actions/index";
// import * as firebase from "firebase";
// import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../src/actions/types";
// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import { MockFirebase } from "firebase-mock";

//import firebase from "../../src/config/firebase.js";
import "jest";
import firebasemock from "firebase-mock";

var mockauth = new firebasemock.MockAuthentication();
var mockdatabase = new firebasemock.MockFirebase();
var mocksdk = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => {
    return path ? mockdatabase.child(path) : mockdatabase;
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return mockauth;
  },
  null,
  null,
  null
);
jest.mock("../../src/config/firebase.js", () => {
  console.log("here: ");
  return mocksdk;
});
console.log("mocksdk: ", mocksdk.database);
//mocksdk.database().flush();

// mockauth.signInWithEmailAndPassword("ben@example.com", "examplePass");
// console.log("mockauth", mockauth);
// mockauth.auth().flush();

mockauth.createUserWithEmailAndPassword("ben@example.com", "examplePass");
mockauth.signInWithEmailAndPassword("ben@example.com", "examplePass");
console.log(
  "mockauth.authWithCustomToken: ",
  mockauth.authWithCustomToken("111")
);
console.log("mockauth.currentUser: ", mockauth.currentUser);
//mockauth.auth().flush();

describe("actions", () => {
  it("it action", () => {
    expect(2 + 2).toEqual(4);
  });
});
