// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFCj3NGj51XwcIsvMp7yRqn85P4FD8ti4",
  authDomain: "vite-contact-be49e.firebaseapp.com",
  projectId: "vite-contact-be49e",
  storageBucket: "vite-contact-be49e.appspot.com",
  messagingSenderId: "745430246386",
  appId: "1:745430246386:web:5ced52e8e79f758e24416b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);