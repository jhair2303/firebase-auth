import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#google-login");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);

    const signInModal = document.querySelector("#signinModal");
    const modal = bootstrap.Modal.getInstance(signInModal);
    modal.hide();

    showMessage("Welcome " + credentials.user.displayName, "success");
  } catch (error) {
    console.log(error);
  }
});
