// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey: "AIzaSyAAN36nxk5ez52EcNz1yh0sOMoPhqY3yqQ",
  authDomain: "fir-auth-project-dc59f.firebaseapp.com",
  projectId: "fir-auth-project-dc59f",
  storageBucket: "fir-auth-project-dc59f.appspot.com",
  messagingSenderId: "134794010740",
  appId: "1:134794010740:web:bb9f094e351fd2b2ac3121", */
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
