// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoEWcKwDvjI0-lUIzqWYIh3nP6GkZbf98",
  authDomain: "privet-route-signup-login.firebaseapp.com",
  projectId: "privet-route-signup-login",
  storageBucket: "privet-route-signup-login.firebasestorage.app",
  messagingSenderId: "283200220202",
  appId: "1:283200220202:web:183fce7a449079819a2753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);