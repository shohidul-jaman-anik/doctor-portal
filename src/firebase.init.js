// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ1dlmnJ7QaVX6y-calrGvdMPXBYagXjw",
  authDomain: "doctor-portal-68a5c.firebaseapp.com",
  projectId: "doctor-portal-68a5c",
  storageBucket: "doctor-portal-68a5c.appspot.com",
  messagingSenderId: "978737982952",
  appId: "1:978737982952:web:f9e4c42a6712d4f59d485d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

