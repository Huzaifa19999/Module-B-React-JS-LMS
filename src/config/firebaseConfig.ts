// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgdmHSHmo5IdIlSot_Q3lm2P-IT4MoGNo",
  authDomain: "lms-reactjs2024.firebaseapp.com",
  databaseURL: "https://lms-reactjs2024-default-rtdb.firebaseio.com",
  projectId: "lms-reactjs2024",
  storageBucket: "lms-reactjs2024.appspot.com",
  messagingSenderId: "61618597620",
  appId: "1:61618597620:web:3350bab043b4b65ed478a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app