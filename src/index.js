import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import "./app/signupForm.js";
import "./app/signinForm.js";
import "./app/logout.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/githubLogin.js";
import { setupPosts } from "./app/postList.js"

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const querySnapshop = await getDocs(collection(db, "post"));
    setupPosts(querySnapshop.docs, "There are no posts yet")
  } else {
    setupPosts([])
  }
  loginCheck(user);
});
