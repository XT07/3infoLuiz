// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-U6hI3x8IRnhwFalvyGgAA5JmI96QB0",
  authDomain: "algumcoisa-10d0e.firebaseapp.com",
  projectId: "algumcoisa-10d0e",
  storageBucket: "algumcoisa-10d0e.appspot.com",
  messagingSenderId: "221207917193",
  appId: "1:221207917193:web:78561d34e4cbfd9c9c4c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);