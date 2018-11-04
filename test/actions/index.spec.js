import { addToDo, fetchToDos } from "../../src/actions/index";
// import * as firebase from "firebase";
// import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../src/actions/types";
// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import { MockFirebase } from "firebase-mock";

import firebase from "../../src/config/firebase";
import "jest";
import firebasemock from "firebase-mock";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
// mock auth
jest.mock("firebase", () => {
  return mocksdk;
});

mocksdk.auth().changeAuthState({
  uid: "testUid",
  provider: "custom",
  token: "authToken",
  expires: Math.floor(new Date() / 1000) + 24 * 60 * 60,
  auth: {
    isAdmin: false
  }
});
mocksdk.auth().flush();
//

describe("actions", () => {
  it("it action", () => {
    expect(2 + 2).toEqual(4);
  });
  // afterEach(() => {
  //   fetchMock.restore();
  // });
  // it("fetchToDos should create FETCH_TODOS action", () => {
  //   const expectedActions = [
  //     {
  //       type: "FETCH_TODOS",
  //       payload: {
  //         "1": {
  //           title: "2"
  //         },
  //         "2": {
  //           title: "4"
  //         }
  //       }
  //     }
  //   ];

  //   const store = mockStore({
  //     1: { title: "2" },
  //     2: { title: "4" }
  //   });

  //   return store.dispatch(fetchToDos()).then(() => {
  //     console.log(store.getActions());
  //     // expect(store.getActions()).toEqual({
  //     //   type: "FETCH_TODOS"
  //     // });
  //   });
  // });

  it("should execute fetch data", () => {
    const store = mockStore({});

    // Return the promise
    return store.dispatch(fetchToDos()).then(() => {
      const actions = store.getActions();
      console.log(actions);
      // expect(actions[0]).toEqual(success());
    });
  });
});
