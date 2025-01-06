// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBCg4Lbk8_YCRa1tzbEQE_FrUNnxh2jNBk",
    authDomain: "blog-web-f3d50.firebaseapp.com",
    projectId: "blog-web-f3d50",
    storageBucket: "blog-web-f3d50.firebasestorage.app",
    messagingSenderId: "143758830997",
    appId: "1:143758830997:web:4b356d71a10ba298a8da9c",
    measurementId: "G-N4KL06L5W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup, signOut };
