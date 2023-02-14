import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider,
} from "../config/firebase";

export const startGoogleLogin = () => () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const startFacebookLogin = () => () => {
  return firebase.auth().signInWithPopup(facebookAuthProvider);
};

export const startGithubLogin = () => () => {
  return firebase.auth().signInWithPopup(githubAuthProvider);
};

export const startLogout = () => () => {
  return firebase.auth().signOut();
};
