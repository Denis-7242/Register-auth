// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.apiKey",
  authDomain: "process.env.authDomain",
  projectId: "process.env.projectId",
  storageBucket: "process.env.storageBucket",
  messagingSenderId: "process.env.messagingSenderId",
  appId: "process.env.appId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//submit button
const submitButton = document.getElementById("submit-button");
submitButton
  .addEventListener("click", function (event) {
    event.preventDefault();

    //inputs
    const fullName = document.getElementById("full name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm password").value;
    createUserWithEmailAndPassword(auth, email, password);
    //signed up
    const user = userCredential.user;
    alert("Creating account...");
    window.location.href = "Home.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error: " + errorMessage);
    // ..
  });
