// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeEJlK4owwm73IWA39I8K86RwvwqdvZhQ",
  authDomain: "netflixgpt-3e6e2.firebaseapp.com",
  projectId: "netflixgpt-3e6e2",
  storageBucket: "netflixgpt-3e6e2.appspot.com",
  messagingSenderId: "251639990587",
  appId: "1:251639990587:web:c54fdb60e0857b677e4f1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
