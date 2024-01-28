// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as firebaseAuth from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYYN7jeSeTwP10DByTVmbyWo863RMawPo",
  authDomain: "emanare-46fa0.firebaseapp.com",
  projectId: "emanare-46fa0",
  storageBucket: "emanare-46fa0.appspot.com",
  messagingSenderId: "605107639695",
  appId: "1:605107639695:web:0caebe25508e40e57127fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = firebaseAuth.initializeAuth(app)