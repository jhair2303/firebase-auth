import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const signupModal = document.querySelector("#signupModal");
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    showMessage("Welcome " + userCredentials.user.email, "success");
  } catch (error) {
    console.log(error.message);
    console.log(error.code);
    if (error.code === "auth/email-already-in-use") {
      showMessage("Email already in use");
    } else if (error.code === "auth/invalid-email") {
      showMessage("Invalid email");
    } else if (error.code === "auth/weak-password") {
      showMessage("Password is too weak");
    } else {
      showMessage("Something went wrong");
    }
  }
});
