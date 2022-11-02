import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signinForm = document.querySelector("#signin-form");

signinForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signinForm["signin-email"].value;
  const password = signinForm["signin-password"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    const signinModal = document.querySelector("#signinModal");
    const modal = bootstrap.Modal.getInstance(signinModal);
    modal.hide();

    showMessage("Welcome " + credentials.user.email, "success");
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showMessage("Wrong password");
    } else if (error.code === "auth/user-not-found") {
      showMessage("User not found");
    } else {
      showMessage(error.message);
    }
  }
});
