import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

var config = {
  apiKey: "AIzaSyB6VjY0GzrYJMBF9qL-mbaNHdyWxMjTp6g",
  authDomain: "expense-c7e09.firebaseapp.com",
  projectId: "expense-c7e09",
  storageBucket: "expense-c7e09.appspot.com",
  messagingSenderId: "1034940255291",
  appId: "1:1034940255291:web:b418c242e1751c4578201e",
};

const app = initializeApp(config);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
};
