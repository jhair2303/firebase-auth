import { signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
});
