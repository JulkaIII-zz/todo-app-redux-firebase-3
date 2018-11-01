import { todosRef, authRef, provider } from "../config/firebase";
import { FETCH_TODOS, FETCH_USER, ADD_TODO, LOGIN_SUCCESS,  } from "./types";

export const addToDo = newToDo => async () => {
  console.log("todo: ", newToDo);
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async () => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    console.log("name: ", name);
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signInWithGoogle = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, err });
    });
};

export const signIn = credentials => {
  return dispatch => {
    authRef
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};

export const signUp = newUser => dispatch => {
  authRef
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(() => {
      dispatch({ type: "SIGNUP_SUCCESS" });
    })
    .catch(err => {
      dispatch({ type: "SIGNUP_ERROR", err });
    });
};
