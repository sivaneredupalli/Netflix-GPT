// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjZIyCz6K3sEQbirK4pF1XqrO7FW1Gt28",
  authDomain: "netflixgpt-44f67.firebaseapp.com",
  projectId: "netflixgpt-44f67",
  storageBucket: "netflixgpt-44f67.firebasestorage.app",
  messagingSenderId: "896014968170",
  appId: "1:896014968170:web:18eb80444a86b2bd0b3113",
  measurementId: "G-48TJTEB6E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
