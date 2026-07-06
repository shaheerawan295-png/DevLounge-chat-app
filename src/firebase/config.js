import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-utOhZinDibLOw5vLd0HVpK9pdY2LO04",
  authDomain: "decimal-chat-app.firebaseapp.com",
  projectId: "decimal-chat-app",
  storageBucket: "decimal-chat-app.firebasestorage.app",
  messagingSenderId: "795008419357",
  appId: "1:795008419357:web:1a8e21870f1553718c28f4",
  measurementId: "G-6GRNWRP1H1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();


export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logoutUser = () => signOut(auth);