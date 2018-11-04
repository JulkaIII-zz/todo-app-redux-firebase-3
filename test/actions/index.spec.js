import { signIn, signOut } from "../../src/actions/index";
import * as firebase from "firebase";
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../src/actions/types";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MockFirebase } from "firebase-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let mockProps;

function mockFirebaseService() {
  return new Promise(resolve => resolve(true));
}
jest.mock(
  "firebase",
  () =>
    new Promise(resolve =>
      resolve({
        signInWithEmailAndPassword: () => {
          return { getIdToken: () => "123" };
        }
      })
    )
);

describe("login actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("signOut should call firebase", () => {
    const user = {
      email: "test@test.com",
      password: "abd123"
    };

    return store.dispatch(signOut()).then(() => {
      expect(mockFirebaseService).toHaveBeenCalled();
    });
  });
});

// describe("login actions", () => {
//   // console.log('MockFirebase', MockFirebase);
//   // console.log('onCheckAuth', onCheckAuth);
//   let mockAuth;

//   beforeEach(() => {
//     mockAuth = new MockFirebase();
//     console.log("mockAuth: ==>", mockAuth);

//     mockProps = {
//       signIn: jest.fn()
//       // signOut: jest.fn(),
//       // checkAuth: jest.fn(),
//       // createUser: jest.fn(),
//       // resetPassword: jest.fn(),
//       // verifyEmail: jest.fn()
//     };
//   });

//   it("signIn should be called", () => {
//     const user = {
//       email: "first.last@yum.com",
//       password: "abd123"
//     };

//     signIn(user.email, user.password);
//     console.log("signIn", signIn);

//     expect(signIn).toHaveBeenCalled();
//   });
// });

describe("actions", () => {
  it("it action", () => {
    expect(2 + 2).toEqual(4);
  });
});
