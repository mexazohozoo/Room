// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyv_LVzK9uWFzEpGe1zKNPUH8DWjOXrx4",
  authDomain: "hozoroom.firebaseapp.com",
  projectId: "hozoroom",
  storageBucket: "hozoroom.firebasestorage.app",
  messagingSenderId: "26873718921",
  appId: "1:26873718921:web:40b59a1c721043b61fbe58",
  measurementId: "G-8ZJ1ZWD1ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
