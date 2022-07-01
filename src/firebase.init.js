// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsfXVZuklccBmad3dgiccEKlEA1imR2cg",
  authDomain: "to-do-5b395.firebaseapp.com",
  projectId: "to-do-5b395",
  storageBucket: "to-do-5b395.appspot.com",
  messagingSenderId: "774938823087",
  appId: "1:774938823087:web:bbefa1b3ad30b6ca15875a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;